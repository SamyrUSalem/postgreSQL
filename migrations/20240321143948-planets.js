'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //Essa função indica tudo q vai ser inserido no banco de dados
  up: async (queryInterface, Sequelize) => {
    //Dessa maneira, estou criando uma tabela
    await queryInterface.createTable("planets", {
      //Abaixo estou criando os campos da tabela
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, //Esse seria o NOT NULL do SQL
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING, //O STRING aeria o Varchar do SQL
        allowNull: false
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },
  //Essa função indica tudo que será removido no banco de dados
  down: async (queryInterface, Sequelize) => {
    //Esse comando é executado para deletar uma tabela
    await queryInterface.dropTable("planets")
  }
}