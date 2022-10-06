import express from 'express';
import Morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import routesCook from './route/routesCook.js';

const advancedOptions = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");


app.use(Morgan('dev'));
app.use(express.json());    
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
        store: MongoStore.create({
            mongoUrl:'mongodb+srv://alejo:alejo2021@cluster0.7aee1.mongodb.net/?retryWrites=true&w=majority',
            mongoOptions: advancedOptions
        }), 
        secret: 'key',
        resave: false,
        saveUninitalized: false,
        cookie:{
            maxAge:6000
        }
    })
)


app.use('/', routesCook)


const PORT = 8080;



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
