const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');
const usuariosController = require('../controllers/usuariosController');

//middle para seguridad
const {verificarToken, verificarRolAdmin} = require('../middleware/auth');

module.exports = function(){
    /* CLIENTES */
    router.post('/clientes', clienteController.newClient);
    router.get('/clientes', verificarToken, clienteController.showClients);
    router.get('/clientes/:id', clienteController.showClient);
    router.put('/clientes/:id', clienteController.updateClient);
    router.delete('/clientes/:id', clienteController.deleteClient);
    
    /* PRODUCTOS */
    router.post('/productos', 
        productosController.upFile,
        productosController.newProduct
    );
    router.get('/productos', verificarToken, productosController.showProducts);
    router.get('/productos/:id', productosController.showProduct);
    router.put('/productos/:id',
        productosController.upFile,
        productosController.updateProduct
    );
    router.delete('/productos/:id', productosController.deleteProduct);

    /* BUSCAR */
    router.post('/productos/busqueda/:query', productosController.searchProducto);

    /* PEDIDOS */
    router.post('/pedidos/nuevo/:id', pedidosController.newPedido);
    router.get('/pedidos', pedidosController.showPedidos);
    router.get('/pedidos/:id', pedidosController.showPedido);
    router.put('/pedidos/:id', pedidosController.updatePedido);
    router.delete('/pedidos/:id', pedidosController.deletePedido);
    
    /* ROLES USUARIOS */
    router.post('/crear-cuenta', usuariosController.registerUser);
    router.post('/iniciar-sesion', usuariosController.authenticateUser);
    return router;
}

