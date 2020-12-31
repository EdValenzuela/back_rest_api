const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) =>{
    const authHeader = req.get('Authorization');

    if(!authHeader){
        const error = new Error('No autenticado, no hay JWT');
        error.statusCode = 401;
        throw error;
    }

    //Separo la cadena y valido solo el token
    const token = authHeader.split(' ')[1];
    let revisarToken;
    try {
        revisarToken = jwt.verify(token, process.env.CLAVE_TOKEN);
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    if(!revisarToken){
        const error = new Error('No autorizado');
        error.statusCode = 401;
        throw error;
    }

    next();
}

const verificarRolAdmin = (req, res, next) =>{
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
}

module.exports = {
    verificarToken,
    verificarRolAdmin
}
