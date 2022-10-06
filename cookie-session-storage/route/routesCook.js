import { Router } from "express";
import datosMock from "../../Clase22-Normalizr/datosMock.js";

const route = Router()

// Ruta logueo 
route.get("/login", (req, res) => {
    res.render('login');
})


// Ruta para guardar la cookie y redirigir a productos
route.post("/login", (req, res) => {
    const {name,password} = req.body

    req.session.name = name
    req.session.password = password

    res.redirect('/productos')
})


route.get('/productos',(req,res)=>{
    const user = {
        name:req.session.name,
        pass:req.session.password
    }

    if(req.session.name == undefined){
        res.redirect('/login')
    }else{
        res.render('productos',{datosMock,user})
    }



})

route.post('/logout',(req,res)=>{
    const {name} = req.session

    res.render('logout',{name})

    console.log(req.body)
})


export default route;