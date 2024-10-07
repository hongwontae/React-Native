const Sequelize = require('sequelize')
const DB_Setting = require('../util/DB_Setting');

const UserModel = DB_Setting.define('user', {
    id : {
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
        type : Sequelize.DataTypes.INTEGER
    },
    email : {
        allowNull : false,
        type : Sequelize.DataTypes.STRING
    },
    password : {
        allowNull : false,
        type : Sequelize.DataTypes.STRING
    }
})

module.exports = UserModel;