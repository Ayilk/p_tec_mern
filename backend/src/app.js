
const express = require('express');
const cors = require('cors');

const app = express();

// Configuración

//Nos guarda la variable de entorno port
app.set('port', process.env.PORT || 5000);

module.exports = app;