
const express = require('express');
const cors = require('cors');

const app = express();

//-------------- Configuración

//Nos guarda la variable de entorno port
app.set('port', process.env.PORT || 5000);

// --------------Middelwares

//Nos permite hacer las peticiones desde un servidor distinto a nuestro servidor backen, como el que vamos a usar en react
app.use(cors());
// Prepara a nuestro servidor para recibir y devolver en formato json
app.use(express.json());


// -----------------Rutas

app.get('/', (res, resp) => {
    res.send('Api en acción');
})

module.exports = app;