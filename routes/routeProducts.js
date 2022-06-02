const {Router} = require('express');
const Api = require('../controllers/functionsProducts');
const router = Router();


const productos = new Api('./db/Productos.json');

//Rutas de Productos
router.get('/:id?', (req, res) => {
    const {id} = req.params;
        if(id){
            productos.getOne(id)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err));
        }
            else{
                productos.getAll()
                .then(data => res.json(data))
                .catch(err => res.status(500).json(err));
            }
})  

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {
    
})


router.delete('/:id', (req, res) => {
    
})


module.exports = router;