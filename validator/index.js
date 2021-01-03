const userRegisterValidator = (req, res, next) => {
    req.check("email", "Enter a email validate")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
    req.check("nombre", "Name is required").notEmpty()
    req.check("password", "Password is required").notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

const userLoginValidator = (req, res, next) => {
    req.check("email", "Enter a email validate")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @ is necesary")
    req.check("password", "Password is required").notEmpty();
        
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

const clienteValidator = (req, res, next) => {
    req.check("nombre", "El nombre del cliente es requerido").notEmpty();
    req.check("apellido", "El apellido del cliente es requerido").notEmpty();
    req.check("profesion", "La profesion del cliente es requerido").notEmpty();
    req.check("email", "Ingresa un email valido")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @ is necesary");
    req.check("telefono", "El teléfono del cliente es requerido").notEmpty();
        
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

module.exports = {
    userRegisterValidator,
    userLoginValidator,
    clienteValidator
}
