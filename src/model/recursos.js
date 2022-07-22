const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecursosSchema = new Schema({

    videos: String,
    guias: String,
    enlaces:String,
    nombre: String,
    id_lab: Object

});     

const Rec = mongoose.model("Rec",RecursosSchema);
module.exports = Rec;
