import {MongoClass} from '../../contenedores/MongoClass.js';
 
export class MongoDBCart extends MongoClass{    
    constructor(){
        super('carts',{
            idProd:{type:String, required:true, unique:true},
            brand:{type:String,required:true},
            description:{type:String,required:true},
            price:{type:Number,required:true},
            product:{type:String,required:true},
            cant:{type:Number,required:true}
        });
    }
}