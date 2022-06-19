const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 8080;
const socket = require('socket.io');

    

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))  



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.use('/api/carrito', require('./routes/routeCart'));
app.use('/api/productos', require('./routes/routeProducts'));


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
