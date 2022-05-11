const {Router} = require('express');
const router = Router();
const {Productos} = require('../controllers/classProducst');
const {apiProductos} = require('../db/Productos');

const Product = new Productos(apiProductos);

router.get('/', Product.getAllProdu());

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.render(id)
})

router.post('/', (req, res) => {
    res.render();
});

router.put('/:id',(req,res)=>{
    const {id} = req.params;
    res.render(id);
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    res.render(id); 
});

module.exports = router;

