const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PeriodoSchema = new Schema({

    nombre: String,
    URL_icono: String

});



const Per = mongoose.model("Asg",PeriodoSchema);
module.exports = Per;
