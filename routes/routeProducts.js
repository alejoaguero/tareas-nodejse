const {Router} = require('express');
const Api = require('../controllers/functionsProducts');
const router = Router();

const productos = new Api('C:/Users/alejo/OneDrive/Documentos/Alejo/Paginas/nodejs/coder-node/db/Productos.json');

//Rutas de Productos
router.get('/:id?', (req, res) => {
    let {id} = req.params;
    
    if(id == null){
        productos.getAll()
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }
        else{
            productos.getOne(id)
            .then(data => res.json(data))
            .catch(err => res.json(err));        
        }
})  

router.post('/', (req, res) => {
    const obj = req.body;

    productos.create(obj)
            .then(data => res.json(data))
            .catch(err => res.json(err));
})

router.put('/:id', (req, res) => {
    const obj = req.body;
    const {id} = req.params;

        productos.update(id,obj)
        .then(data => res.json(data))
        .catch(err => res.json(err));   
})


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    productos.delete(id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
})


module.exports = router;