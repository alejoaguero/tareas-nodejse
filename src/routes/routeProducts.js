import  { Router } from 'express';
import  {producstDao}  from '../daos/index.js';
const router = Router();
//Rutas de Productos

router.get('/', (req, res) => {
    producstDao
    .then((products) => {
        products.getAll()
            .then((products) => {
                console.log(products);
                res.json(products);
            })
            .catch((err) => console.log(err));
    })
})          

router.get('/:id', (req, res) => {
    producstDao
    .then((products) => {
        products.getOne(req.params.id)
            .then((product) => {
                console.log(product);
                res.json(product);
            })
            .catch((err) => console.log(err));
    })
})

router.post('/', (req, res) => {
    producstDao
        .then((products) => {
            products.create(req.body)
                .then((product) => {
                    res.json(product);
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
})

router.put('/:id', (req, res) => {  
    producstDao
        .then((products) => {
            products.update(req.params.id, req.body)
                .then((product) => {
                    res.json(product);
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
})

router.delete('/', (req, res) => {
    producstDao
        .then((products) => {
            products.delete(req.body.id)
                .then((product) => {
                    res.json(product);
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
})

export default router;