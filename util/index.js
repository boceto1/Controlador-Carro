var exec = require('child_process').exec, child;
const { spawn } = require('child_process');
// Creamos la función y pasamos el string pwd 
// que será nuestro comando a ejecutar

var ejecutarComando = function (comando) {
 //console.log("ENTRE")
   child = exec(comando,
  // Pasamos los parámetros error, stdout la salida 
  // que mostrara el comando
    function (error, stdout, stderr) {
      // Imprimimos en pantalla con console.log
      console.log(stdout);
      //res.status(200).send({message:stdout})
      // controlamos el error
      if (error !== null) {
        console.log('exec error: ' + error);
        //res.status(500).send({message:"FAIL"})
      }
  });

}

var runPy = function(pathScrip,req,res) {

  const pyprog = spawn('python', [pathScrip]);

  pyprog.stdout.on('data', function(data) {

      res.status(200).send(data.toString());
  });

  pyprog.stderr.on('data', (data) => {
      res.status(500).send(data.toString());
  });
}


exports.ejecutarComandos = function ejecutarComandos(req,res){
 
  var accion = parseInt(req.params.comando)

  switch (accion) {
    case 1:
      runPy("./python/avanzar.py",req,res)
      break;
    case 2:
      runPy("./python/retroceder.py",req,res)
      break;
    case 3:
      runPy("./python/izquierda.py",req,res)
      break;
    case 4:
      runPy("./python/derecha.py",req,res)
      break;
    default:
      break;
  }



}