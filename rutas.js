// Importar modulo express y conexion
const router = require('express').Router();
const connection = require('./config/connection');

// GET ALL
router.get('/', function (req, res) {
    let sql = 'SELECT * FROM prueba;'
    connection.query(sql, (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json(rows);
            console.log(sql);
        };
    });
});

// GET
router.get('/:id', (req, res) => {
    const { id } = req.params;
    let sql = 'SELECT * FROM prueba WHERE id = ?';
    connection.query(sql, [id], (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json(rows);
            console.log(sql);
        };
    });
});

// POST
router.post('/', (req, res) => {
    const { nombre } = req.body;
    // Para inicar entrada de variables, utilizar comillas invertidas "`" (Alt+96))
    let sql = `INSERT INTO prueba(nombre) values('${nombre}')`;
    connection.query(sql, (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json({ status: 'Prueba agregada!' });
            console.log(sql);
        };
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let sql = `DELETE FROM prueba WHERE id = '${id}'`;
    connection.query(sql, (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json({ status: 'Prueba eliminada!' });
            console.log(sql);
        };
    });
});

// PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    let sql = `UPDATE prueba SET
                nombre = '${nombre}'
                WHERE id = '${id}'`;
    connection.query(sql, (error, rows, fields) => {
        if (error) throw error;
        else {
            res.json({ status: 'Prueba modificada!' });
            console.log(sql);
        };
    });
});

// Exportar rutas
module.exports = router;