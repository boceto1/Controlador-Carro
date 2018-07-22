const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan')

const app = express()
const api = require('./routes')
const { spawn } = require('child_process');

var runPy = function(pathScrip,req,res) {

    const pyprog = spawn('python', [pathScrip]);

    pyprog.stdout.on('data', function(data) {

        res.status(200).send(data.toString());
    });

    pyprog.stderr.on('data', (data) => {
        res.status(500).send(data.toString());
    });
}


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(morgan('dev'));

app.use('/carros',api)

app.get('',(req,res)=>{
    res.status(200).send({message:"UP SERVICE"})
})

app.get('/comando/1',(req,res)=>{

    runPy("./util/python/avanzar.py",req,res)
})

app.get('/comando/2',(req,res)=>{

    runPy("./util/python/retroceder.py",req,res)
})

app.get('/comando/3',(req,res)=>{

    runPy("./util/python/derecha.py",req,res)
})

app.get('/comando/4',(req,res)=>{

    runPy("./util/python/izquierda.py",req,res)
})

app.get('/comando/0',(req,res)=>{

    runPy("./util/python/detener.py",req,res)
})

    


module.exports = app


