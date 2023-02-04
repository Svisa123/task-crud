const mongoose = require("mongoose")
const Usuario = require("../models/Usuario")
require("dotenv").config({path: "variables.env"})

const conectarDB = async ()=>{
    try{
    await mongoose.connect(process.env.DB_MONGO)
    console.log("DB connectado")
   const usuarios = await Usuario.find()
   console.log(usuarios)
      
    }catch(error){
        console.log(error)
    }
}

module.exports = conectarDB;