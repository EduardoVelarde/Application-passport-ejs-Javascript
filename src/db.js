const {Sequelize} = require('sequelize');

const db = new Sequelize("after_passport","root","12345678",{
    host:"localhost",
    dialect:"mysql"
})

module.exports = {db}