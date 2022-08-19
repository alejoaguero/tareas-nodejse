import fs  from ('fs');

class Api{

    constructor(connection){
        this.connection =  connection;
    }

    async getAll(){
        try {
            const datas = await fs.promises.readFile(this.urlDB, 'utf-8');    
            
            return JSON.parse(datas);

        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }
    
    async getOne(id){
         try {
            const datas = await this.getAll();
            const index = datas.findIndex(item => item.id === id);

            if(index !== -1){

                return datas[index];
            }
                else{
                    throw  new Error(`Error: No se encontro el id: ${id}`);
                }

         } catch (error) {
            throw new Error(`Error: ${error}`);
         }
    }

    async create(obj){
        try {
            knex(options).table('productos').insert
                .then(data => {
                })
                .catch(err => {
                    throw new Error(`Error al crear: ${err}`);
                })

        } catch (error) {
            throw new Error(`Error al guardar: ${error}`);
        }
    }

    async update(id, obj){
        try {
            const datas = await this.getAll();
            const index = datas.findIndex(item => item.id === id);
            
            if(index !== -1){   

                datas[index].nombre = obj.nombre ? obj.nombre : datas[index].nombre;
                datas[index].descripcion = obj.descripcion ? obj.descripcion : datas[index].descripcion;
                datas[index].precio = obj.precio ? obj.precio : datas[index].precio;
                datas[index].stock = obj.stock ? obj.stock : datas[index].stock;
                datas[index].codigo = obj.codigo ? obj.codigo : datas[index].codigo;
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