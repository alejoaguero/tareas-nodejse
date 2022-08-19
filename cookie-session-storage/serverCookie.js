import express from 'express';
import Morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import datosMock from '../Clase22-Normalizr/datosMock.js';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.use(Morgan('dev'));
app.use(express.json());    
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));




app.use('/productos', (req,res)=>{
    res.render('productos',{datosMock})
})


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
