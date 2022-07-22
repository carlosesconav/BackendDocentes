const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GradoSchema = new Schema({

    nombre: String,
    id_asignatura: Object

});



const Grado = mongoose.model("Grado",GradoSchema);
module.exports = Grado;
