const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan')

const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(morgan('dev'));

app.use('/carros',api)

app.get('',(req,res)=>{
    res.status(200).send({message:"UP SERVICE"})
})

module.exports = app

