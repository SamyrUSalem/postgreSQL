'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("satelites", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      serial_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      planetId: {
        type: Sequelize.INTEGER,
        references: { model: "planets", key: "id" }, //O model seria a tabela q ser a referencia e o key seria o tipo da cahve q sera usada
        onUpdate: "CASCADE", //A atualização sera feita de modo cascata, os dados serão atualizados um de cada vez oq for feito sera replicado em todo o dado
        onDelete: "CASCADE"
      },

      createdAt: {
        type: Sequelize.DATE
      },

      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("satelites")

  }
};
