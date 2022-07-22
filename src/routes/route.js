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

//Rutas Docente

app.post("/createDoc",(req, res)=>{

    controller.createDocentes(req, res);

})

app.get("/getDocentes",(req, res)=>{

    controller.getDocentes(res);

})


exports.app = app;