import  {MongoClass}  from "../../contenedores/MongoClass.js";

export class MongoDBProducts extends MongoClass {
    constructor() {
        super('products', { 
            name: { type: String, required: true },
            price: { type: Number, required: true },
            description: { type: String, required: true },
            brand: { type: String, required: true },
            stock: { type: Number, required: true },
        });
    }
}