const {Router} = require('express');
const router = Router();
const Carro = require('../controllers/functionsCart');

const carrito = new Carro('C:/Users/alejo/OneDrive/Documentos/Alejo/Paginas/nodejs/coder-node/db/Carros.json');


router.post('/', (req, res) => {
    const obj = req.body;
    carrito.createCart(obj)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    carrito.deleteProduct(id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
})

router.get('/:id/productos', (req, res) => {
    const {id} = req.params;

    carrito.getCartId(id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.post('/:id/productos', (req, res) => {
    const {id} = req.params;
    const prodId = req.body;

        carrito.updateCart(id,prodId)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

router.delete('/:id/productos/:idProducto', (req, res) => {
    const {id,idProducto} = req.params;

    carrito.deleteProduct(id,idProducto)
    .then(data => res.json(data))
    .catch(err => res.json(err));
})

module.exports = router;