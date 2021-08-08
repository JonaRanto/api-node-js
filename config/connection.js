// Importar modulo mysql2 y configura la conexion
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'db_prueba',
});

// Imprimir por pantalla exito/error
connection.connect(error => {
    if (error) {
        console.log('Ha ocurrido un error: ' + error);
    }
    else {
        console.log('Se ha conectado exitosamente');
    }
});

// Exportar la conexion
module.exports = connection;