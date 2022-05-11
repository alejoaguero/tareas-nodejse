const {Router} = require('express');
const router = Router();

const mascotas = []


router.get('/', (req, res) => {
    res.json({mascotas});
})

router.post('/', (req, res) => {
    const mascota = req.body
    mascotas.push(mascota)
    res.redirect('/mascotas')
})

router.post('/',(req, res) => {
    mascotas = []
    
})

module.exports = router;