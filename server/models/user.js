'use strict';
module.exports = (sequelize, DataTypes) => {
  const {hash} = require('../helpers/hash');
  const { Model } = sequelize.Sequelize;
  class User extends Model { }

  User.init({
    email: {
      type: DataTypes.STRING
    },
    password: DataTypes.STRING
  }, { 
    hooks: {
      beforeCreate(instance,options) {
        instance.password = hash(instance.password);
      }
    },
    sequelize 
  })

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Favorite)
  };
  return User;
};