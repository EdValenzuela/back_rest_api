const Clientes = require('../models/Clientes');

// add new cliente
exports.newClient = async (req, res, next) => {
    const cliente = new Clientes(req.body);

    try {
        await cliente.save();
        res.json({
            message : 'Se agrego un nuevo cliente'
        });
    } catch (error) {
        res.json({
            message: 'Hubo un error o cliente ya registrado con el email!'
        });
        next();
    }
}

// show clients
exports.showClients = async(req, res, next) =>{
    try {
        const clientes =  await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        res.send(error);
        next();        
    }
}

// show client with id
exports.showClient = async(req, res, next) =>{

    try {
        const cliente = await Clientes.findById(req.params.id);
        res.json(cliente);
    } catch (error) {
        console.log(error);
        res.json({
            message: 'Cliente no existe!'
        });
        next();
    }
}

// update client with id
exports.updateClient = async(req, res, next) =>{
    try {
        const cliente = await Clientes.findOneAndUpdate(
            {_id : req.params.id}, 
            req.body, 
            {new: true}
        );

        res.json(cliente);

    } catch (error) {
        res.send(error);
        next();
    }
}

exports.deleteClient = async(req, res, next) => {
    try {
        await Clientes.findOneAndDelete({_id : req.params.id});
        res.json({message: 'Cliente ha sido eliminado!'});
    } catch (error) {
        res.send(error);
        next();
    }
}