

const app = require('./app');

// Levantando el servidor

const port = app.get('port');
console.log("port", port)

app.listen(port, () => {
    console.log(`Escuchando en el puerto:  ${port}`)
  })