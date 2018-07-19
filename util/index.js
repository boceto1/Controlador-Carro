var exec = require('child_process').exec, child;
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

exports.ejecutarComandos = function ejecutarComandos(req,res){
 
  var accion = parseInt(req.params.comando)

  switch (accion) {
    case 1:
      ejecutarComando("python Add.py")
      res.status(200).send({message:"AVANZAR"})
      break;
    case 2:
      ejecutarComando("ipconfig")
      res.status(200).send({message:"RETROCEDER"})
      break;
    case 3:
      ejecutarComando("mkdir prueba")
      res.status(200).send({message:"GIRO DERECHA"})
      break;
      case 3:
      ejecutarComando("mkdir prueba")
      res.status(200).send({message:"GIRO IZQUIERDA"})
      break;
    default:
      break;
  }



}