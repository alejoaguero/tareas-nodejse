const knex = require("knex");
const { options } = require("./options/configDB");


class ApiClass{
    constructor(knex,table){
        this.knex =  knex(options);
        this.table = table;
    }

    async getAll(){
        try {
            this.knex.select('*').from(this.table)
                .then(data => { 
                    return data
                })
                .catch(err => console.log(err))
                    
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }
    
    async getOne(id){
         try {
            this.knex.select('*').from(this.table)
                .where('id', id)
                .then(data => {
                    return data
                })
                .catch(err => console.log(err))

         } catch (error) {
            throw new Error(`Error: ${error}`);
         }
    }   

    async create(obj){
        console.log(obj)
        try {
            
            await this.knex.table(this.table).insert({
                
                name: obj.name,
                price: obj.price,
                description: obj.description

            })


            const productos = await this.getAll();
            
            return productos;

        } catch (error) {
            throw new Error(`Error al guardar: ${error}`);
        }
    }


    async delete(id){
        try {
            this.knex.table(this.table).where('id', id).del()
            .then(data => {
                return data
            })
            .catch(err => {
                throw new Error(`Error al eliminar: ${err}`);
            })

        } catch (error) {
            throw new Error(`Error al eliminar: ${error}`);
        }
    }

    async deleteAll(){
        try {
            this.knex.table(this.table).del()
            .then(data => {
                return data
            })
            .catch(err => {
                throw new Error(`Error al eliminar: ${err}`);
            })

        } catch (error) {
            throw new Error(`Error al eliminar: ${error}`);
        }
    }
}

module.exports = ApiClass;