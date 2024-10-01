const Sequelize = require('sequelize');
const DB_Setting = require('../util/DB-Setting');

const ItemModel = DB_Setting.define('item_model', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    amount : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false
    },
    date : {
        type : Sequelize.DataTypes.DATE,
        allowNull : false
    },
    description : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})

module.exports = ItemModel;