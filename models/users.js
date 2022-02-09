const {db} = require('../src/db.js');
const Sequelize = require('sequelize');

const DataTypes = Sequelize.DataTypes;

const User = db.define('users',{
    username:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    password:{
        type:DataTypes.TEXT,
        allowNull:false
    }
})

module.exports = {User}