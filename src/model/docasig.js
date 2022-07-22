const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DocAsginSchema = new Schema({

    id_docente: Object,
    id_asignatura: Object


});



const DA = mongoose.model("DA",DocAsginSchema);
module.exports = DA;
