class Productos{

    constructor(file){
        this.file = this.file;
    }

    get getAllProdu(req, res){
        res.send(this.file.map(product => {
            return product;
        }))
    }
}






module.exports = {
    Productos
}