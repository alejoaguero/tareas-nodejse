import { faker } from '@faker-js/faker'


const datosMock = []


for(let i = 0;i < 5;i++){
    const product = {
        id: i+1,
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.business()
    }

    datosMock.push(product)
}


export default datosMock
