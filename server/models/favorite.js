'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Favorite extends Model { }
  Favorite.init({
    footballTeamAway: DataTypes.STRING,
    footbalTeamHome: DataTypes.STRING,
    footbalTeamAwayLogo: DataTypes.STRING,
    footballTeamHomeLogo: DataTypes.STRING,
    basketVisitor: DataTypes.STRING,
    basketHome: DataTypes.STRING,
    basketVisitorLogo: DataTypes.STRING,
    basketHomeLogo: DataTypes.STRING,
    due_date: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, { sequelize });
  Favorite.associate = function (models) {
    Favorite.belongsTo(models.User)
    // associations can be defined here
  };
  return Favorite;
};