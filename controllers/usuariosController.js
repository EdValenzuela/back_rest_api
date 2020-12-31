const Usuarios = require('../models/Usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async(req, res) =>{
    const usuario = new Usuarios(req.body);
    usuario.password = await bcrypt.hash(req.body.password, 12);

    try {
        await usuario.save();
        res.json({message: 'Usuario creado satisfactoriamente'});
    } catch (error) {
        console.log(error);
        res.json({message: 'Hubo un error'});
    }
}

exports.authenticateUser = async(req, res, next) =>{
    const {email, password} = req.body;
    const usuario = await Usuarios.findOne({email});

    if(!usuario){
        await res.status(401).json({message: 'El usuario no existe'});
        next();
    }else{
        if(!bcrypt.compareSync(password, usuario.password)){
            await res.status(401).json({message: 'Password Incorrecto'});
            next();
        }else{
            const token = jwt.sign({
                email: usuario.email,
                nombre: usuario.nombre,
                id: usuario._id
            },
            process.env.CLAVE_TOKEN,
            {
                expiresIn: process.env.CADUCIDAD_TOKEN
            });

            res.json({token});
        }
    }

}