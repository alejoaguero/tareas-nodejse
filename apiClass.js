const knex = require("knex");
const { options } = require("./options/configDB");


class ApiClass{
    constructor(knex,table){
        this.knex =  knex(options);
        this.table = table;
    }

    async getAll(){
        try {
            const elementos =  this.knex.from(this.table).select('*')
            
            return elementos;


        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }
    
    async getOne(id){
         try {
            const element = await this.knex.from(this.table).select('*').where('id', id)


                return element
         } catch (error) {
            throw new Error(`Error: ${error}`);
         }
    }   

    async create(obj){
        try {
            
            const newElement =  await this.knex.table(this.table).insert(obj)

            return newElement;

        } catch (error) {
            throw new Error(`Error al guardar: ${error}`);
        }
    }


    async delete(id){
        try {

            const elementDelete = await this.knex.from(this.table).where('id', id).del()

            return elementDelete;
            
        } catch (error) {
            throw new Error(`Error al eliminar: ${error}`);
        }
    }

    async deleteAll(){
        try {
            const elementsDeletes = await this.knex.from(this.table).del()

        } catch (error) {
            throw new Error(`Error al eliminar: ${error}`);
        }
    }
}

module.exports = ApiClass;