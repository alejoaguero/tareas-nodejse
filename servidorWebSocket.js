const { options,options2 } = require('./options/configDB.js');
const knex = require('knex');

const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(server);  


const ApiClass = require('./apiClass.js');
const api = new ApiClass(knex, 'productos');
const db = knex(options2);

const PORT= 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))  



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    res.render(__dirname + '/views/index');
})




/* 
db.schema.createTable('message', (table) => {
    table.increments('id').primary();
    table.string('message');
    table.string('date')
    table.string('email')
})  
    .then(() => console.log('Tabla creada'))
    .catch(err=> console.log(err))
 */
db.from('message').select('*')
    .then(data => console.log(data))
    .catch(err=> console.log(err))


io.on('connection', (socket) => {
   
    // emitiendo productos
    api.getAll()
        .then((data) => socket.emit('all-products', data))
        .catch((error) => console.log(error))
    
    //emitiendo messages
    db.from('message').select('*')
        .then(data => socket.emit('all-messages',data))
        .catch(err=> console.log(err))


    //recibiendo un producto nuevo 
    socket.on('new-produ', (data) => {
        api.create(data)
        .then(() => {
            console.log('Se guardo el producto')
        })
        .catch(err=> console.log(err))
        

        api.getAll()
            .then((data) => io.sockets.emit('all-products', data))
            .catch((error) => console.log(error))   
    })  

    //recibiendo nuevos mensajes
    socket.on('new-message',(data)=>{
        db.from('message').insert(data)
            .then(data => console.log(data))
            .catch(err => console.log(err))

    db.from('message').select('*')
        .then(data => io.sockets.emit('all-messages',data))
        .catch(err=> console.log(err))

    })

    
    
})



server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

