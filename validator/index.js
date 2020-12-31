exports.userRegisterValidator = (req, res, next) => {
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

exports.userLoginValidator = (req, res, next) => {
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
