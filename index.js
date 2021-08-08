require('./config/connection');

// Importar express
const express = require('express');

// Establecer el puerto que ya se está utilizando o el puerto 3000
const port = (process.env.port || 3000);

// Express
const app = express();

// Tipos de datos admitidos
app.use(express.json());

// Config
app.set('port', port);

// Routes
app.use('/api', require('./rutas'))

// Iniciar express
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('Error al iniciar el servidor: ' + error);
    }
    else {
        console.log('El servidor se ha iniciado en el puerto: ' + port);
    }
});