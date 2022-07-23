const mongoose = require('mongoose');
const User = require('../model/User');
const Doc = require('../model/docente');
const DA = require('../model/docasig');
const Asg = require('../model/asignatura');
const Rec = require('../model/recursos');
const Lab = require('../model/laboratorio');
const Grado = require('../model/grado');
const Per = require('../model/periodo');
require('dotenv').config();

class Controller {

    constructor() {

        this.connect();

    }

    async connect() {

        try {

            await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

            console.log('Conectado a la base de datos')

        } catch (error) {

            console.error("Conexion con la base de datos fallida: ", error)

        }

    }

    //Acciones de la Persona o Usuario

    createUsers(req, res) {

        const user = User(req.body);

        user.save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))


    }

    getUsers(res) {

        User.find({}, (err, users) => {

            if (err) throw err;

            res.send(users);

        })

    }

    //Docentes

    createDocentes(req, res) {

        const doc = Doc(req.body);
        doc.save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))


    }

    getDocentes(res) {

        Doc.find({}, (err, docentes) => {

            if (err) throw err;

            res.send(docentes);

        })

    }

    //Asginatura

    createAsignatura(req, res) {

        const asg = Asg(req.body);
        asg.save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))

    }

    getAsignatura(res) {

        Asg.find({}, (err, asignatura) => {

            if (err) throw err;
            res.send(asignatura);

        })

    }

    //Grado

    createGrado(req, res) {

        const grado = Grado(req.body);
        grado.save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ meesage: error }))


    }


    getGrado(res) {

        Grado.find({}, (err, grado) => {

            if (err) throw err;
            res.send(grado)


        })



    }

    //DA

    createDA(req, res){

        const da = DA(req.body);
        da.save().then((data)=>res.json(data)).catch((error)=> res.json({ message: error }))


    }

    getDa(res){

        DA.find({},(err, DA)=>{

         if(err) throw err;
         res.send(DA);

        })


    }



}

exports.controller = new Controller();
