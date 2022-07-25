const express = require('express');
const app = express();
const { controller } = require("../Controller/Controller.js");

app.use(express.json());

app.get("/", (req, res) => {

    res.send('HOLA MUNDO :D');

});

//Rutas personas o usuarios
app.get("/Users", (req, res) => {

    controller.getUsers(res);

})

app.post("/createUser", (req, res) => {

    controller.createUsers(req, res);


})

app.delete("/deleteUser/:id", (req, res) => {

    let { id } = req.params;
    controller.deleteUser(id, res);


});

app.put("/updateUser/:id",(req, res)=>{

    let user = req.body.user;
    user.id = req.params.id;
    controller.updateUser(user,res)

})

app.get("/getUser/:id",(req, res)=>{

    let { id } = req.params;
    controller.buscarUno(id, res);


})

//Rutas Docente

app.post("/createDoc", (req, res) => {

    controller.createDocentes(req, res);

})

app.get("/getDocentes", (req, res) => {

    controller.getDocentes(res);

})

app.delete("/deleteDocentes/:id", (req, res) => {

    let { id } = req.params;
    controller.deleteDocente(id, res);

})

app.get("/getDocente/:id",(req, res)=>{

    let { id } = req.params;
    controller.buscarUnDocente(id, res);


})


//Ruta asignatura

app.get("/getAsg", (req, res) => {

    controller.getAsignatura(res)

})

app.post("/createAsg", (req, res) => {

    controller.createAsignatura(req, res);

})

app.delete("/deleteAsg/:id", (req, res) => {

    let { id } = req.params;
    controller.deleteAsignatura(id, res);

})

app.get("/getUser/:id",(req, res)=>{

    let { id } = req.params;
    controller.buscarUno(id, res);


})

//Ruta Grado

app.get("/getGrado", (req, res) => {

    controller.getGrado(res);

})

app.post("/createGrado", (req, res) => {

    controller.createGrado(req, res);


})

app.delete("/deleteGrado/:id", (req, res) => {

    let { id } = req.params;
    controller.deleteGrado(id, res);

})

app.get("/getGrado/:id",(req, res)=>{

    let { id } = req.params;
    controller.buscarUnGrado(id, res);


})

//Ruta laboratorio

app.get("/getLab", (req, res) => {

    controller.getLaboratorio(res);

})

app.post("/createLab", (req, res) => {

    controller.createLaboratorio(req, res);

})

app.delete("/deleteLab/:id", (req, res) => {

    let { id } = req.params;
    controller.deleteLaboratorio(id, res);

})

app.get("/getLab/:id",(req, res)=>{

    let { id } = req.params;
    controller.buscarUnLaboratorio(id, res);


})

//Ruta recursos

app.get("/getRecursos", (req, res) => {

    controller.getRecursos(res);

})

app.post("/createRecurso", (req, res) => {

    controller.createRecursos(req, res);

})

app.delete("/deleteRecurso/:id", (req, res) => {

    let { id } = req.params;
    controller.deleteRecuros(id, res);

})

app.get("/getRecurso/:id",(req, res)=>{

    let { id } = req.params;
    controller.buscarUnRecurso(id, res);

})

// Ruta periodo

app.get("/getPeriodo", (req, res) => {

    controller.getPeriodo(res);

})

app.post("/createPeriodo", (req, res) => {

    controller.createPeriodo(req, res);

})

app.delete("/deletePeriodo/:id", (req, res) => {

    let { id } = req.params;
    controller.deletePeriodo(id, res);

})

app.get("/getPeriodo/:id",(req, res)=>{

    let { id } = req.params;
    controller.buscarUnPeriodo(id, res);


})

//Ruta DA

app.get("/getDA", (req, res) => {

    controller.getDa(res);

})

app.post("/createDA", (req, res) => {

    controller.createDA(req, res);

})

app.delete("/deleteDA/:id", (req, res) => {

    let { id } = req.params;
    controller.deleteDA(id, res);

})

exports.app = app;