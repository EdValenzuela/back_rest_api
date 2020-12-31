const express = require('express');
const router = express.Router();

const pedidosController = require('../controllers/pedidosController');

/* PEDIDOS */
router.post('/pedidos/nuevo/:id', pedidosController.newPedido);
router.get('/pedidos', pedidosController.showPedidos);
router.get('/pedidos/:id', pedidosController.showPedido);
router.put('/pedidos/:id', pedidosController.updatePedido);
router.delete('/pedidos/:id', pedidosController.deletePedido);

module.exports = router;