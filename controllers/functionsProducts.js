const fs = require('fs');

class Api{

    constructor(urlDB){
        this.urlDB = __dirname + urlDB;
    }

    async getAll(){
        try {
            const datas = await fs.promises.readFile(this.urlDB, 'utf-8');

            return datas;

        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }
    
    async getOne(id){
         try {
             const datas = await this.getAll();
  
                return datas.find(item => item.id === id);
            
         } catch (error) {  

            throw new Error(`Error: ${error}`);
         }
    }

    async create(obj){
        try {
            const datas = await this.getAll();
            const newId = datas[datas.length-1].id + 1;

            datas.length == 0 ? obj.id = 1 : obj.id = newId;

            datas.push(obj);

            await fs.promises.writeFile(this.urlDB, JSON.stringify(datas));
            
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`);
        }
    }

    async update(id, obj){
        try {
            const datas = await this.getAll();
            const index = datas.findIndex(item => item.id === id);
    
            if(dataID){

                datas[index].nombre = obj.nombre;
                datas[index].descripcion = obj.descripcion;
                datas[index].precio = obj.precio;
                datas[index].stock = obj.stock;
                datas[index].codigo = obj.codigo;
            }
                else{
                    throw new Error(`Error: No se encontro el id: ${id}`);
                }

            await fs.promises.writeFile(this.urlDB, JSON.stringify(datas));
            
            return datas[index];
        }


        catch (error) {
            throw new Error(`Error al actualizar: ${error}`);
        }
    }


    async delete(id){
        try {
            const datas = await this.getAll();
            const index = datas.findIndex(item => item.id === id);    
            
            datas.splice(index,1);
            
            await fs.promises.writeFile(this.urlDB, JSON.stringify(datas));

            return datas;
        } catch (error) {
            throw new Error(`Error al eliminar: ${error}`);
        }
    }
}

module.exports = Api;