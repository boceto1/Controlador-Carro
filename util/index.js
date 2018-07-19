var exec = require('child_process').exec, child;
// Creamos la función y pasamos el string pwd 
// que será nuestro comando a ejecutar

exports.ejecutarComandos = function ejecutarComandos(req,res){
child = exec('ipconfig',
// Pasamos los parámetros error, stdout la salida 
// que mostrara el comando
  function (error, stdout, stderr) {
    // Imprimimos en pantalla con console.log
    console.log(stdout);
    res.status(200).send({message:stdout})
    // controlamos el error
    if (error !== null) {
      console.log('exec error: ' + error);
      res.status(500).send({message:"FAIL"})
    }
});
}