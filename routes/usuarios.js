const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

const { userRegisterValidator, userLoginValidator } = require("../validator");

/* ROLES USUARIOS */
router.post('/crear-cuenta', userRegisterValidator, usuariosController.registerUser);
router.post('/iniciar-sesion', userLoginValidator, usuariosController.authenticateUser);

module.exports = router;