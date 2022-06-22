const doteenv = require('dotenv');
doteenv.config();

const options = {
    client: 'mysql',
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_BASE
    }
}


const options2 = {
    client: 'sqlite3',
    connection: { filename: './db/mydb.sqlite' },
    useNullAsDefault: true

}


module.exports = {
    options,
    options2
}