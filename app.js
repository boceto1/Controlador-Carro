const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan')

const app = express()
const api = require('./routes')
const { spawn } = require('child_process');

/*var runPy = new Promise(function(success, nosuccess) {

    const { spawn } = require('child_process');
    const pyprog = spawn('python', ['./util/Add.py']);

    pyprog.stdout.on('data', function(data) {

        success(data);
    });

    pyprog.stderr.on('data', (data) => {

        nosuccess(data);
    });
});*/


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(morgan('dev'));

app.use('/carros',api)

app.get('',(req,res)=>{
    res.status(200).send({message:"UP SERVICE"})
})

app.get('/test',(req,res)=>{
        var process = spawn('python', ['./util/ada.py'])

        process.stdout.on('data', function(data) {
            res.status(200).send(data.toString());
        });
    
    })



module.exports = app


