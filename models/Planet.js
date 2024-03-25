const { DataTypes } = require("sequelize") //Será usado a constante criada no sequelize.js, para buscar os dados no banco
const sequelize = require("../config/sequelize")//Irá receber os dados do banco

const Planet = sequelize.define("planets", {//Atraves do define, foi escolhido o banco de dados q será utilizado q no caso é o planets, e depois foi inserido os valores q precisam ser preenchido da tabela
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,
})

module.exports = Planet