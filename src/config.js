import dotenv from 'dotenv';
import serviceAccount  from './db/coder-node-6090e-firebase-adminsdk-54m9f-3aae08c5c2.json' assert {type:'json'};
dotenv.config();

export default {
    mongoDB:{
        URL: `mongodb+srv://${process.env.DB_MONGO}:${process.env.DB_KEY}@cluster0.7aee1.mongodb.net/ecommerce?retryWrites=true&w=majority`,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },

    firebase(admin){
            admin.initializeApp({
              credential: admin.credential.cert(serviceAccount) 
            });

    }
}