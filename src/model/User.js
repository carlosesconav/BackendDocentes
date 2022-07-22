const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    user: String,
    correo: String,
    id_docente: Object


});



const User = mongoose.model("User",UserSchema);
module.exports = User;
