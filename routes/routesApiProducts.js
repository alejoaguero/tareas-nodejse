const {Router} = require('express');
const router = Router();

// Array de Productos
let productos = [
    {
        id: 1,
        name: 'Producto 1',
        price: 100,
        description: 'Descripcion del producto 1'
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 200,
        description: 'Descripcion del producto 3'
    }
]



// Clase de Producto

class Product {
    constructor(id,name,price,description,image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}



// Rutas
router.get('/',(req,res)=>{
    res.json(productos)
});

router.post('/', (req, res) => {
    let nuevoProdu = {};
    nuevoProdu = new Product();

    nuevoProdu.id = productos[productos.length-1].id + 1;
    nuevoProdu.name = req.body.name;
    nuevoProdu.description = req.body.description;
    nuevoProdu.price = req.body.price;

    productos.push(nuevoProdu);

    res.json(nuevoProdu);
});


router.get('/:id', (req, res) => {
    const {id} = req.params;
    let produId =  productos.find(producto => producto.id == id);
    
    produId ? res.json(produId) : res.json({error: 'producto no encontrado '});

})

router.put('/:id',(req,res)=>{
    const {id} = req.params;
    let produId =  productos.find(producto => producto.id == id);
    
    produId.name = req.body.name;
    produId.description = req.body.description;
    produId.price = req.body.price;

    res.json(produId);
});

router.delete('/:id',(req,res)=>{
    let newArray = [];
    const {id} = req.params;
    newArray = productos.filter(producto => producto.id != id);
    productos = [...newArray];

    res.json(productos);

});

module.exports = router;

