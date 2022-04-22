const http = require('http');
const express = require('express');
const mensaje = () => {
    const nowHour = new Date().getHours();

    if (nowHour >= 6 && nowHour < 12) {
        return 'Buenos días';
    } else if (nowHour >= 13 && nowHour < 19) {
        return 'Buenas tardes';
    } else
        return 'Buenas noches';
}

/*
const app = http.createServer((req, res) => {
    res.end(mensaje());
})*/

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log('El servidor esta corriendo en el puerto: ', PORT);
})


app.get('/', (req, res) => {
    res.send(`<h1 style="color:blue" >Bienvenidos al servidor express</h1>`);
})
let band = 0

app.get('/visitas', (req, res) => {
    res.send('La cantidad de visitsas es de: ' + ++band);
})
let date = new Date().toLocaleString();
app.get('/fyh', (req, res) => {
    res.send({ fyh: date })
})