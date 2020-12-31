const Pedidos = require('../models/Pedidos');

exports.newPedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body);
    try {
        await pedido.save();
        res.json({message: 'se agregó un nuevo pedido'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.showPedidos = async (req, res, next) =>{
    try {
        const pedidos = await Pedidos.find({}).populate('cliente')
        .populate({
            path: 'pedido.producto',
            model: 'Productos'
        });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.showPedido = async (req, res, next) => {
    try {
        const pedido =  await Pedidos.findById(req.params.id).populate('cliente')
        .populate({
            path: 'pedido.producto',
            model: 'Productos'
        });
        res.json(pedido);
    } catch (error) {
        console.log(error);
        res.json({message: 'Pedido no existe'});
        next();
    }
}

exports.updatePedido = async(req, res, next) =>{
    try {
        const pedido = await Pedidos.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        })
        .populate('cliente')
        .populate({
            path: 'pedido.producto',
            model: 'Productos'
        });

        res.json(pedido);

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.deletePedido = async(req, res, next) => {
    try {
        await Pedidos.findOneAndDelete({_id: req.params.id});
        res.json({message: 'Pedido ha sido eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}