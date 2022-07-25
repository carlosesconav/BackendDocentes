const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DocAsginSchema = new Schema({

    id_docente: [{

        type: mongoose.Schema.ObjectId,
        ref: 'Doc'

    }],
    id_asignatura: [{

        type: mongoose.Schema.ObjectId,
        ref: 'Asg'

    }]


});



const DA = mongoose.model("DA", DocAsginSchema);
module.exports = DA;
