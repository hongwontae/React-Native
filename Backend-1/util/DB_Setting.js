const sequelize = require('sequelize');

const db = new sequelize.Sequelize({
    dialect : 'mysql',
    username : 'root',
    password : 'YourRootPassword',
    database : 'login_demo',
    host : 'localhost'
})

module.exports = db;