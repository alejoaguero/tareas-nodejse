import { Router } from "express";
import datosMock from "../../Clase22-Normalizr/datosMock.js";

const route = Router()


route.get("/login", (req, res) => {
    res.render('login');
})

route.post("/login", (req, res) => {
    const {name,password} = req.body

    req.session.name = name
    req.session.password = password

    res.redirect('/productos')
})


route.get('/productos', (req,res)=>{
    const user = {
        name:req.session.name,
        pass:req.session.password
    }

            res.render('productos',{datosMock,user})
        
            if(req.body){
                console.log(req.body)
            }
})



route.post('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err) throw err
        res.redirect('/login')
    })
})




export default route;