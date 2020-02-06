'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      footballTeamAway: {
        type: Sequelize.STRING
      },
      footbalTeamHome: {
        type: Sequelize.STRING
      },
      footbalTeamAwayLogo: {
        type: Sequelize.STRING
      },
      footballTeamHomeLogo: {
        type: Sequelize.STRING
      },
      basketVisitor: {
        type: Sequelize.STRING
      },
      basketHome: {
        type: Sequelize.STRING
      },
      basketVisitorLogo: {
        type: Sequelize.STRING
      },
      basketHomeLogo: {
        type: Sequelize.STRING
      },
      due_date: {
        type: Sequelize.DATE
      },
      UserId: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Favorites');
  }
};