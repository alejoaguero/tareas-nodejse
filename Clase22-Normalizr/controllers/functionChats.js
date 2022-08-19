import config from  '../../src/config.js'
import mongoose from 'mongoose'
const {Schema} =  mongoose

mongoose.connect(config.mongoDB.URL,config.mongoDB.options)


export class functionChat {
    constructor(){
        this.collection = mongoose.model('chat',{
            autor:{
                name:{type:String,required:true},
                surname:{type:String,required:true},
                age:{type:Number,required:true},
                alias:{type:String,required:true},
                avatar:{type:String,required:true},
                email:{type:String,required:true}
            },
            messages:{
                name:{type:String,required:true},
                surname:{type:String,required:true},
                age:{type:Number,required:true},
                alias:{type:String,required:true},
                avatar:{type:String,required:true},
                email:{type:String,required:true},
                message: {type:String,required:true}
            }
            
        })
    }


    async getAll(){
        try {
            const chat = await this.collection.find({})
            
            return chat
        } catch (error) {
            throw new Error(error)
        }
    }

    async create(data){
        try {
            const message = new this.collection(data)

            await message.save()
            return await this.getAll()

        } catch (error) {
            throw new Error(error)
        }
    }
}