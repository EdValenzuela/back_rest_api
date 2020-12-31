const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    precio: {
        type: Number
    },
    imagen:{
        type: String
    }
    // marca: {
    //     type: String
    // },
    // modelo:{
    //     type: String
    // },
    // estado: {
    //     type: String
    // },
    // color: {
    //     type: String
    // }
});

module.exports = mongoose.model('Productos', productosSchema);