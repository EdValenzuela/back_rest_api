const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController');

//middle para seguridad
const {verificarToken, verificarRolAdmin} = require('../middleware/auth');

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

module.exports = router;
