// Aquí está la cadena de conexioń

const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI : 'mongodb://localhost/dbmern';


mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("La basee de datos ha sido conectada: ", URI)
})