const express = require('express');
const app = express();
const {controller} = require("../Controller/Controller.js");

app.use(express.json());

app.get("/", (req, res)=> {

    res.send('HOLA MUNDO :D');
    
});

app.get("/Users",(req, res)=>{

    controller.getUsers(res);
    

})


app.post("/createUser", (req, res)=>{

    controller.createUsers(req,res);


})
 
exports.app = app;