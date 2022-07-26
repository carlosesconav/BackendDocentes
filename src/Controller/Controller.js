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

    deleteUser(id, res) {

        User.deleteOne({ _id: id }, (err) => {

            if (err) throw err;
            res.send({ message: "Usuario ha sido eliminado" })

        })

    }

    updateUser(user, res) {

        let { id, nombre, correo } = user;

        User.updateOne({ _id: id }, { $set: { nombre: nombre, correo: correo, id_docentes:id_docentes } })
            .then(rawResponse => {

                res.send({ meesage: "Usuario actualizado", raw: rawResponse });

            }).catch((err) => {

                if (err) throw err;

            });

    }

    buscarUno(id, res){

        User.findOne({ _id: id }, (err,user) => {

            if (err) throw err;
            res.send(user)

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

    deleteDocente(id, res) {

        Doc.deleteOne({ _id: id }, (err) => {

            if (err) throw err;

            res.send({ message: "Usuario ha sido eliminado" })


        })

    }

    buscarUnDocente(id, res){

        Doc.findOne({ _id: id }, (err,doc) => {

            if (err) throw err;
            res.send(doc)

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

    deleteAsignatura(id, res) {

        Asg.deleteOne({ _id: id }, (err) => {

            if (err) throw err;

            res.send({ message: "Usuario ha sido eliminado" })


        })

    }

    buscarUnaAsignatura(id, res){

        Asg.findOne({ _id: id }, (err,asg) => {

            if (err) throw err;
            res.send(asg)

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

    deleteGrado(id, res) {

        Grado.deleteOne({ _id: id }, (err) => {

            if (err) throw err;

            res.send({ message: "Usuario ha sido eliminado" })


        })

    }

    buscarUnGrado(id, res){

        Grado.findOne({ _id: id }, (err,grado) => {

            if (err) throw err;
            res.send(grado)

        })

    }


    //DA

    createDA(req, res) {

        const da = DA(req.body);
        da.save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))

    }

    getDa(res) {

        DA.find({}, (err, DA) => {
            if (err) throw err;
            res.send(DA);

        })

    }

    deleteDA(id, res) {

        DA.deleteOne({ _id: id }, (err) => {

            if (err) throw err;

            res.send({ message: "Usuario ha sido eliminado" })


        })

    }



    // Laboratorio

    createLaboratorio(req, res) {

        const lab = Lab(req.body);
        lab.save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))

    }


    getLaboratorio(res) {

        Lab.find({}, (err, Lab) => {

            if (err) throw err;
            res.send(Lab)


        })

    }

    deleteLaboratorio(id, res) {

        Lab.deleteOne({ _id: id }, (err) => {

            if (err) throw err;

            res.send({ message: "Usuario ha sido eliminado" })

        })

    }

    buscarUnLaboratorio(id, res){

        Lab.findOne({ _id: id }, (err,lab) => {

            if (err) throw err;
            res.send(lab)

        })

    }

    //recursos

    createRecursos(req, res) {

        const rec = Rec(req.body);
        rec.save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))

    }


    getRecursos(res) {

        Rec.find({}, (err, Lab) => {

            if (err) throw err;
            res.send(Lab)


        })

    }

    deleteRecuros(id, res) {

        Rec.deleteOne({ _id: id }, (err) => {

            if (err) throw err;

            res.send({ message: "Usuario ha sido eliminado" })

        })

    }

    buscarUnRecurso(id, res){

        Rec.findOne({ _id: id }, (err,rec) => {

            if (err) throw err;
            res.send(rec)

        })

    }

    //Periodo

    createPeriodo(req, res) {

        const per = Per(req.body);
        per.save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))

    }


    getPeriodo(res) {

        Per.find({}, (err, Lab) => {

            if (err) throw err;
            res.send(Lab)


        })

    }

    deletePeriodo(id, res) {

        Per.deleteOne({ _id: id }, (err) => {

            if (err) throw err;

            res.send({ message: "Usuario ha sido eliminado" })

        })

    }

    buscarUnPeriodo(id, res){

        Per.findOne({ _id: id }, (err,per) => {

            if (err) throw err;
            res.send(per)

        })

    }

}

exports.controller = new Controller();
