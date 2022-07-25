const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LaboratorioSchema = new Schema({

    Enlaces_lab: String,
    nombre: String,
    url_icono: String

});

const Lab = mongoose.model("Lab", LaboratorioSchema);
module.exports = Lab;
