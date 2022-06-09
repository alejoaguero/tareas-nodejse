const fs = require('fs');


class Carro{
    constructor(urlDB) {
        this.urlDB = urlDB;
    }

    async getAllCart(){
        try {
            const cart = await fs.promises.readFile(this.urlDB, 'utf-8');

            return JSON.parse(cart);

        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    } 

    async getCartId(id){
        try {
            const cart = await this.getAllCart();

            const cartId = cart.filter(cart => cart.id === id);

            return cartId;

        } catch (error) {
            throw new Error(`Error al obtener un carrito: ${error}`);
        }
    }

    async deleteProduct(id,idProdu){
        const cart = await this.getAllCart();
        const index = cart.findIndex(cart => cart.id === parseInt(id));
        const cartId = cart.filter(cart => cart.id === parseInt(id));

        cartId.productos = cartId.productos.filter(producto => producto.id !== parseInt(idProdu));

        cart[index] = cartId;

        await fs.promises.writeFile(this.urlDB,JSON.stringify(cart));   

        return cartId;

    }

    async updateCart(id,prodId){
        try {
            const cart = await this.getAllCart();

            
            const producto = await fs.promises.readFile('C:/Users/alejo/OneDrive/Documentos/Alejo/Paginas/nodejs/coder-node/db/Productos.json', 'utf-8');
            const productos = JSON.parse(producto);
            const findProduct = productos.find(producto => producto.id === prodId.id);

            const index = cart.findIndex(cart => cart.id == parseInt(id));
            
            cart[index].productos.push({...findProduct});
                

            await fs.promises.writeFile(this.urlDB,JSON.stringify(cart));

            return cart[index];

        } catch (error) {
            throw new Error(`Error al actualizar un carrito: ${error}`);
        }
    }
    async createCart(obj){
        try {
            const cart = await this.getAllCart();
            
            const id = cart.length == 0 ? 1 : parseInt(cart[cart.length - 1].id) + 1;
            const timestamp = Date.now()
            
            cart.push({...obj,id,timestamp});

            await fs.promises.writeFile(this.urlDB,JSON.stringify(cart));

                return cart;

        } catch (error) {
            throw new Error(`Error al crear un carrito: ${error}`);
        }
    }

    async deleteCart(id){
        try {
                const cart = await this.getAllCart()
                   
                
                cart = cart.filter(cart => cart.id !== id);

                await fs.promises.writeFile(this.urlDB,JSON.stringify(cart));

                return cartFiltered;

        } catch (error) {
            throw new Error(`Error al eliminar un carrito: ${error}`);           
        }
    }
}

module.exports = Carro;