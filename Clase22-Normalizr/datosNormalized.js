import {normalize,schema} from 'normalizr';
import util from 'util';


const schemaAuthor = new schema.Entity('autor',{},{idAttribute:'email'})
const schemaMessage = new schema.Entity('message',{
    message: schemaAuthor
})


const schemaChat = new schema.Entity('mensaje',{
    autor: schemaAuthor,
    mensajes: [schemaMessage]
})

const schemaMensajes = new schema.Entity('mensajes',{
    id:'mensajes',
    mensajes: [schemaMessage]
},{idAttribute:'mensajes'})

export  function datosNormalizr(mensaje){
    const datosNormalized = normalize(mensaje,schemaMensajes);

    console.log(util.inspect(datosNormalized,true,7,true))
} 