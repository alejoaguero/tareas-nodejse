const express = require('express');
const morgan = require('morgan');
const multer = require('multer');



const app = express();
const PORT = 8080;



//middleware

/*app.use(multer({
    dest:__dirname + '/public/files',
}).single('myFile'))
*/

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))  


//Middleware de manejo de erro
const paginaNoEncontrada = (err,req, res, next) => {
    res.status(404).send('Pagina no encontrada');
}

//rutas
//app.use('/mascotas', require('./routes/routesMascotas.js'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/producto.html')
})
app.use('/api/productos', require('./routes/routesApiProducts.js'));
app.use(function(err, req, res, next){
    res.status(500).send('Algo salio mal');
})

/*ruta ejemplo con multer
    app.post('/uploadflie', (req, res) => {
    console.log(req.file)
    res.json({messenger: "subido exitosamente"})   
})*/


//empezando servidor

const server = app.listen(PORT, () => {
    console.log("El servidor esta corriendo en el puerto: ", PORT);
})