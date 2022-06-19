const { options } = require('./options/configDB.js');
const knex = require('knex');

const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(server);  


const ApiClass = require('./apiClass.js');
const api = new ApiClass(knex, 'productos');


const PORT= 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))  



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    res.render(__dirname + '/views/index');
})



io.on('connection', (socket) => {
    socket.on('new-produ', (data) => {
        api.create(data)
            .then(data => {
                socket.emit('productos', data)
                console.log(data)
            }) 
            .catch(err => console.log(err))
    })   
})

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

