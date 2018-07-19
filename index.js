const app = require('./app')
const config = require('./config')

app.listen(config.port, ()=>{
    console.log(`Corriendo en el puerto: ${config.port}`)
})