const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definicion de esquema
const todolist= new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: date,
        required: true
    }
},
    { timestamps: true }
);


module.exports = mongoose.model('TodoL', todolist);