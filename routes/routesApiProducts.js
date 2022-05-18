const {Router} = require('express');
const router = Router();

// Array de Productos
let productos = [
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

const produId = productos > 0 ? productos[productos.length - 1].id + 1 : 1;

// Rutas
router.get('/',(req,res)=>{
    res.render('listasProductos',{
        productos: productos
    })
});

router.get('/ingresoProductos',(req,res)=>{
    res.render('ingresoProductos',{})   
})

router.post('/ingresoProductos', (req, res) => {
    let nuevoProdu = {};
    
        nuevoProdu = new  Product(
        produId,
        req.body.name,
        req.body.price,
        req.body.description
        );


    console.log(nuevoProdu.length)
    productos.push(nuevoProdu);
    res.render('ingresoProductos',{})
});


router.get('/productos/:id', (req, res) => {
    const {id} = req.params;
    let produId =  productos.find(producto => producto.id == id);
    
    produId ? res.json(produId) : res.json({error: 'producto no encontrado '});

})

router.put('/productos/:id',(req,res)=>{
    const {id} = req.params;
    let produId =  productos.find(producto => producto.id == id);
    
    produId.name = req.body.name;
    produId.description = req.body.description;
    produId.price = req.body.price;

    res.json(produId);
});

router.delete('/productos/:id',(req,res)=>{
    let newArray = [];
    const {id} = req.params;
    newArray = productos.filter(producto => producto.id != id);
    productos = [...newArray];

    res.json(productos);

});

module.exports = router;

