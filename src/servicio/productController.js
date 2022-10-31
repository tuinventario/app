
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000
let libros = []// Aquí ubicaremos los datos de libros

app.use(cors());
app.get('/', function(req, res) {// desplegamos el index
    console.log(libros)
res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// Configuración del middleware body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => console.log(`App Libro esta en el puerto ${port}!`));