const http = require('http');
const express = require('express');
const contenedor = require('./main.js');

const container = new contenedor('productos.txt');
/*
const app = http.createServer((req, res) => {
    res.end(mensaje());
})*/

const app = express();
const PORT = 8080;
const arrayProductos = [];

container.getAll()
    .then(productos => arrayProductos.push(...productos))
    .catch(error => console.log(error));

    
app.listen(PORT, () => {
    console.log('El servidor esta corriendo en el puerto: ', PORT);
})


app.get('/', (req, res) => {
    res.send(`<h1 style="color:blue" >Bienvenidos al servidor express</h1>`);
})

app.get('/productos', (req, res) => {
    res.send(arrayProductos);   
})

app.get('/productoRandom', (req, res) => {
    container.getById(Math.floor(Math.random() * (arrayProductos.length)) + 1)
    .then(producto => res.send(producto))
})