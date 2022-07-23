const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DocenteSchema = new Schema({

    correo: String,
    telefono: Number


});

const Doc = mongoose.model("Doc", DocenteSchema);
module.exports = Doc;
