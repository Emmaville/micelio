const path = require('path');
require('dotenv').config();

module.exports = {
    client: process.env.DATABASE_CLIENT,
    connection:{
        client: process.env.DATABASE_CLIENT, //why do we have 2 client?
        host : process.env.DATABASE_HOST,
        user : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASSWORD,
        database : process.env.DATABASE
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    // seeds: {
    //     directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    // },
    useNullAsDefault: true
}; 