const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DocAsginSchema = new Schema({

    id_docente: String,
    id_asignatura: String


});



const DA = mongoose.model("DA",DocAsginSchema);
module.exports = DA;
