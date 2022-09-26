import mongoose from 'mongoose';
import {MongoClass} from '../../contenedores/MongoClass.js';

export class MongoDBCart extends MongoClass{

    constructor(){
        super('cart',{
            cant:{type:Number,require:true},
            producto:{type:mongoose.Types.ObjectId, unique:true}
        });
    }

    async GetAllCart(){
        const cart = await this.collection.aggregate([
            {
                $lookup:{
                    from:'products',
                    localField:'producto',
                    foreignField:'_id',
                    as:'productsCart'
                }
            }
        ])

        return cart;
    }

    async CreateProduCart(cant,producto){

        const produCart = await this.collection.create({cant,producto});

        return produCart;
    }
}