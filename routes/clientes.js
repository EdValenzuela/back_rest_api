const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { clienteValidator } = require("../validator");

//middle para seguridad
const {verificarToken, verificarRolAdmin} = require('../middleware/auth');

/* CLIENTES */
router.post('/clientes', clienteValidator, clienteController.newClient);

router.get('/clientes', verificarToken, clienteController.showClients);
router.get('/clientes/:id', clienteController.showClient);
router.put('/clientes/:id', clienteController.updateClient);
router.delete('/clientes/:id', clienteController.deleteClient);

module.exports = router;