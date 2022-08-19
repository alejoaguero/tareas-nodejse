import {Router} from 'express';
import { cartDao } from '../daos/index.js';


const router = Router();

router.get('/', (req, res) => {
    cartDao
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
    cartDao
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
    cartDao
        .then((products) => {
            products.create(req.body)
                .then((product) => {    
                    res.json(product);
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
})

router.put('/', (req, res) => { 
    cartDao
        .then((products) => {
            products.update(req.params.id,{cant: req.body.cant})
                .then((product) => {
                    res.json(product);
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
})

router.delete('/', (req, res) => {
    cartDao
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