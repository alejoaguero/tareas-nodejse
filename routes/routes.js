const {Router} = require('express');
const router = Router();
const frase = "Hola mundo como estan";

router.get('/api/frase', (req, res) => {
    res.send(frase);
})

router.get('/api/letras/:num',(req, res) => {
    const {num} = req.params;

        if(isNaN(num)){
            return res.send({error:'No es un numero'});
        }
        if(num<1 || num>frase.length){
            return res.send({error: 'Numero no valido'});
        }
        return res.send(frase[num-1]);


})


router.get('/api/palabras/:num',(req, res) => {
    const {num} = req.params;

    if(isNaN(num)){

        return res.send({error:'No es un numero'});
    }
    let palabras = frase.split(' ');
    if(num<1 || num>palabras.length){
        return res.send({error: 'Numero no valido'});
    }
    return res.send(palabras[num-1]);
})


module.exports = router;