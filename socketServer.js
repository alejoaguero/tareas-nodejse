/*const express = require('express');
const {Server: ioServer} = require('socket.io');
const http = require('http');
const app = express();
const messages = []


const httpServer = http.createServer(app);
const io = new ioServer(httpServer);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})  


httpServer.listen(3000, () => console.log('server running on port 3000'));


io.on('connection', (socket) => {
    console.log('user connected',socket.id);
    socket.emit('messages', messages);

    socket.on('sendMessage', (message) => {
        messages.push(message);
        io.sockets.emit('messages', messages);
    })
*/