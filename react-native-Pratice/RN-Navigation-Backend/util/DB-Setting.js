const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect : 'mysql',
    host : 'localhost',
    username : 'root',
    password : 'YourRootPassword',
    database : 'react_native'
})

module.exports = sequelize;