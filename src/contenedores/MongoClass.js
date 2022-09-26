import mongoose from "mongoose";
import config from "../config.js";



mongoose.connect(config.mongoDB.URL, config.mongoDB.options);


export class MongoClass  {
    
    constructor(collectionName,docSchema) {
        this.collection = mongoose.model(collectionName, docSchema);
    }


    async getAll() {
        try {

            const allUsers = await this.collection.find({});

            
            return allUsers;
            
        } catch (error) {
            throw new Error('Error : ', error);
        }
    }

    async getOne(id) {
        try {
            console.log(id)

            const user =  await this.collection.findById(id);
            
            return user;
            
        } catch (error) {
            throw new Error('Error : ', error);
        }
    }

    async create(doc) {
        try {
            const usersNew =  await this.collection.create(doc);

            return usersNew;
            
        } catch (error) {
            throw new Error('Error : ', error);
        }
    }

    async update(id, doc) {
        try {
            const user =  await this.collection.findByIdAndUpdate(id, doc);

            return await this.collection.findById(id);

        } catch (error) {
            throw new Error('Error : ', error);
        }
    }
    async delete(id) {
        try {
            await this.collection.deleteOne({id})

            return await this.getAll();

        } catch (error) {
            throw new Error('Error : ', error);
        }
    }
}