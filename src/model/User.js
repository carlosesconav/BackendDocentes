const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

  nombre: {

    type: String,
    required: 'Este campo es reqerido'

  },
  correo: String,

  id_docentes: [{

    type: mongoose.Schema.ObjectId,
    ref: 'Doc'

  }]

});

const User = mongoose.model("User", UserSchema);
module.exports = User;
