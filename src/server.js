import express from 'express';
import  Morgan  from 'morgan';
import routeProducts from './routes/routeProducts.js';
import routeCart from './routes/routeCart.js';
const app = express();
    
app.use(Morgan('dev'));
app.use(express.json());    
app.use(express.urlencoded({extended: true}));

app.use('/products', routeProducts);
app.use('/cart', routeCart);



const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
