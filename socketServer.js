const express = require('express');
const {Server: ioServer} = require('socket.io');
const http = require('http');
const app = express();



const httpServer = http.createServer(app);
const io = new ioServer(httpServer);


//middleware
app.use(express.static(__dirname +'public'));






io.on('connection', () => {
    console.log('user connected');
})