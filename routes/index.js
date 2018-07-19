const express = require('express')
const util = require('../util/')


const api = express.Router()

api.get('/test',(req,res)=>{
    res.status(200).send({message:"UP SERVICE"})
})

api.get('/comando/:comando',util.ejecutarComandos)

module.exports = api