const mongoose = require('mongoose');
const User = require('../model/User');
const Doc =  require('../model/docente');
const DA = require('../model/docasig');
const Asg = require('../model/asignatura');
const Rec = require('../model/recursos');
const Lab = require('../model/laboratorio');
const Grado = require('../model/grado');
require('dotenv').config();
class Controller{

    constructor(){

        this.connect();

    }

   async connect(){

    try {

        await mongoose.connect( process.env.DATABASE_URL , {useNewUrlParser:true} );

            console.log('Conectado a la base de datos')
        
    } catch (error) {

        console.error("Conexion con la base de datos fallida: ",error)

                }

    }

    createUsers(req, res){

        const user = User(req.body);
        
        user.save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json( { message: error } ))


    }

    getUsers(res){ 

        User.find({},(err, users)=>{

            if(err) throw err;

            res.send(users);

        })
        
    }

}

exports.controller = new Controller();
