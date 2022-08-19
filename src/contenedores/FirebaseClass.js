import admin from 'firebase-admin';
import config  from '../config.js';

config.firebase(admin);
    


 export class FirebaseClass  {
    constructor(collectionName) {   
        this.collection = admin.firestore().collection(collectionName);
    }


    async getAll(){
        try {
            const allUsers = await this.collection.get();
            
            const users = allUsers.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })

            

            return users;

        } catch (error) {
            throw new Error('Error : ', error);
        }
    }

    async getOne(id){
        try {
                const user =  await this.collection.doc(id).get();

                return user.data();
            
        } catch (error) {
            throw new Error('Error : ', error);
        }
    }

    async create(data) {
        try {
                const users = await this.getAll();
                let newId
                    if(users.length > 0){
                        const lastId = users[users.length - 1].id
                        newId = (parseInt(lastId) + 1).toString();
                    }
                        else{
                            newId = '1';
                        }                

                await this.collection.doc(newId).create(data);
                
                        
            return await this.getAll() 

        } catch (error) {
            throw new Error('Error : ', error);
        }
    }


    async update(id,data) {
        try {
            await this.collection.doc(id).update(data);
            
            return await this.getOne(id)
        } catch (error) {
            throw new Error('Error : ', error);
        }
    }

    async delete(id) {
        try {
            await this.collection.doc(id).delete()    
            
            return await this.getAll()
            
        } catch (error) {
            throw new Error('Error : ', error);
        }

    }
}
