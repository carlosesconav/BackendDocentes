const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PeriodoSchema = new Schema({

    recursos: String,
    id_grado: [{

        type: mongoose.Schema.ObjectId,
        ref: 'Grado'

    }]

});

const Per = mongoose.model("Per", PeriodoSchema);
module.exports = Per;
