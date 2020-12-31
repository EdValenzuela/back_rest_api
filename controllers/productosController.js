const Productos = require('../models/Productos');

const multer = require('multer');
const shortid = require('shortid');

const configMulter = {
    storage: fileStorage = multer.diskStorage({
        //directorio
        destination: (req, file, cb) => {
            cb(null, __dirname+'../../uploads');
        },
        //name random
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    //filtro de formatos
    fileFilter(req, file, cb){
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null, true);
        }else{
            cb(new Error('Formato de imagen no válido'));
        }
    }
}

const upload = multer(configMulter).single('imagen');

exports.upFile = (req, res, next) => {
    upload(req, res, function(error){
        if(error){
            res.json({message: error})
        }
        return next();
    })
}

//add new products
exports.newProduct = async (req, res, next) => {
    const producto = new Productos(req.body);

    try {

        if(req.file.filename){
            producto.imagen = req.file.filename
        }

        await producto.save();
        res.json({message : 'Se agrego un nuevo producto'});
    } catch (error) {
        console.log(error);
        next();
    }
}

//show all products
exports.showProducts = async (req, res, next) => {
    try {
        const productos = await Productos.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}

//show only a one product with id
exports.showProduct = async (req, res, next) =>{
    try {
        const producto = await Productos.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.json({
            message: 'Producto no existe!'
        });
        next();
    }
}

//update product with id
exports.updateProduct = async (req, res, next) => {
    try {
        let nuevoProducto = req.body;
        
        if(req.file){
            nuevoProducto.imagen = req.file.filename;
        }else{
            let productoAnterior = await Productos.findById(req.params.id);
            nuevoProducto.imagen = productoAnterior.imagen;
        }

        let producto = await Productos.findOneAndUpdate(
            {_id: req.params.id},
            nuevoProducto,
            {new: true,});

        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.deleteProduct = async(req, res, next) =>{
    try {
        await Productos.findOneAndDelete({_id : req.params.id});
        res.json({message : 'Producto eliminado !'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.searchProducto = async(req, res, next) =>{
    try {
        const {query} = req.params;
        const producto = await Productos.find(
            {nombre: new RegExp(query, 'i') }
        );
        res.json(producto);

    } catch (error) {
        console.log(error);
        next();
    }
}