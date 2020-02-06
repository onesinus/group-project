'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class User extends Model { }

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, { sequelize })

  // Coba ubah
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Favorite)
  };
  return User;
};