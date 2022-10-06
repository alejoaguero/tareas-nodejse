import {normalize,schema} from 'normalizr';
import util from 'util';




const schemaAuthor = new schema.Entity('autor')
const schemaMessage = new schema.Entity('message',{
    text: schemaAuthor
})

const schemaPost = new schema.Entity('post',{
    autor: schemaAuthor,
    text: [schemaMessage]
})

const schemaPosts = new schema.Entity('mensajes',{
    mensajes:[schemaPost]
})


export function normalized(dataOriginal){
    const dataNormalize = normalize(dataOriginal, schemaPosts)

    console.log(JSON.stringify(dataOriginal).length)
    console.log(JSON.stringify(dataNormalize).length)
    console.log(util.inspect(dataOriginal,true,7,true))
    console.log(util.inspect(dataNormalize,true,7,true))
}