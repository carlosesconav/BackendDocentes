const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AsignaturaSchema = new Schema({

    nombre: String,
    URL_icono: String

});



const Asg = mongoose.model("Asg",AsignaturaSchema);
module.exports = Asg;
