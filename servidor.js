const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const productos = require('./routes/routesApiProducts');



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



app.set('view engine', 'pug');
app.set('views','./views');

//rutas
//app.use('/mascotas', require('./routes/routesMascotas.js'));

app.use('/', require('./routes/routesApiProducts.js'));


/*ruta ejemplo con multer
    app.post('/uploadflie', (req, res) => {
    console.log(req.file)
    res.json({messenger: "subido exitosamente"})   
})*/


//empezando servidor

const server = app.listen(PORT, () => {
    console.log("El servidor esta corriendo en el puerto: ", PORT);
})