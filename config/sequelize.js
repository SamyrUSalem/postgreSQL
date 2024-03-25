const Sequelize = require("sequelize")
const database = require("./config")

const sequelize = new Sequelize(database) //Dessa forma, esta sendo chamado o arquivo de configurações e com isso vai possibilitar a manipulação do banco de dados

module.exports = sequelize