'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('animais_upgrades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      galinha: {
        type: Sequelize.INTEGER
      },
      vaca: {
        type: Sequelize.INTEGER
      },
      porco: {
        type: Sequelize.INTEGER
      },
      ovelha: {
        type: Sequelize.INTEGER
      },
      cavalo: {
        type: Sequelize.INTEGER
      },
      carpa: {
        type: Sequelize.INTEGER
      },
      abelha: {
        type: Sequelize.INTEGER
      },
      camarao: {
        type: Sequelize.INTEGER
      },
      girafa: {
        type: Sequelize.INTEGER
      },
      lontra: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('animais_upgrades');
  }
};