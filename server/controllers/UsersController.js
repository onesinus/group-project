"use strict"

const {User} = require('../models');
const {isAuthorized}     = require('../helpers/hash');

class UsersController {
    static login(req, res, next) {
        const {email, password} = req.body;
        User
            .findOne({
                where: {email}
            })
            .then(user => {
                if (user && isAuthorized(password, user.password)) {
                    res.status(200).json({token: "disini kasih token ya"});                    
                }else{
                    res.send(user);
                    throw {
                        statusCode: 404,
                        message: "Invalid email or password"
                    }
                }
            })
            .catch(err => {
                next(err.message);
            });
    }   

    static register(req, res, next) {
        const {email, password} = req.body;
        User
            .create({email, password})
            .then(resAdd => {
                res.status(201).json(resAdd);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
}

module.exports = UsersController;