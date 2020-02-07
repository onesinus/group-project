'use strict';
module.exports = (sequelize, DataTypes) => {
  const {hash} = require('../helpers/hash');
  const { Model } = sequelize.Sequelize;
  class User extends Model { }

  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password cannot be empty'
        }
      }
    }
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