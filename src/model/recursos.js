const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecursosSchema = new Schema({

    videos: String,
    guias: String,
    enlaces: String,
    nombre: String,
    id_lab: [{

        type: mongoose.Schema.ObjectId,
        ref: 'Lab'

    }]

});

const Rec = mongoose.model("Rec", RecursosSchema);
module.exports = Rec;
