const express = require('express');
const app = express();
const morgan = require('morgan');

const http = require('http');
const httpServer = http.createServer(app);
const {Server: ioServer} = require('socket.io');
const io = new ioServer(httpServer);

const productos = []
const message = []


const PORT = 8080;


httpServer.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})



app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))  



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


io.on('connection', (socket) => { 
    socket.emit('productos', productos)
    socket.emit('messages', message)
    socket.on('new-produ', (data) => {
        productos.push(data)
    })

    socket.on('new-message', (data) => {
        message.push(data)
    })

    io.sockets.emit('productos', productos)
    io.sockets.emit('messages', message)
})



app.get('/', (req, res) => {
    res.render('index', {productos:productos})
})
