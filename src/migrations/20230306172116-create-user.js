'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      display_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING,
        // field: 'password',
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
  
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};