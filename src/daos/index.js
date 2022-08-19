import dotenv from 'dotenv';
dotenv.config();

let producstDao,cartDao


    if (process.env.DB_NAME == 'mongoDB') {
        producstDao =  import('./products/MongoDBProducts.js')
        .then(({ MongoDBProducts }) => {
            
                return new MongoDBProducts();

            });
        cartDao = import('./cart/MongoDBCart.js')
                        .then(({ MongoDBCart }) => {
                            return new MongoDBCart();
                        })
    }

    if (process.env.DB_NAME == 'firebase') {
        producstDao =  import('./products/FirebaseProducts.js')
            .then(({ FirebaseProducts }) => {
                return new FirebaseProducts();
            });

        cartDao = import('./cart/FirebaseCart.js')
                    .then(({ FirebaseCart }) => {
                        return new FirebaseCart();
                    })
    }


export {producstDao,cartDao};