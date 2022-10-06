import express from 'express';
import Morgan from 'morgan';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import datosMock from './datosMock.js';
import { functionChat } from './controllers/functionChats.js';
import { normalized } from './datosNormalized.js';

const chat = new functionChat();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");


app.use(Morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/productos-test', (req, res) => {
    res.render('productos',{datosMock})
})

app.get('/api/chat', (req, res) => {
    res.render(__dirname + '/views/chat')
})



io.on('connection', (socket) => {
    chat.getAll()
        .then(chats => {
            socket.emit('chat', chats)

            normalized(chats)
        })  
        .catch(error=> console.log(error))  


    socket.on('message', (message) => {
        chat.create(message)
            .then(chats => {
                console.log(chats)
            }).catch(error => console.log(error))
    })
})




server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

