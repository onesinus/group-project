"use strict"

const { User } = require('../models');
const { isAuthorized } = require('../helpers/hash');

class UsersController {
    static login(req, res, next) {
        const { email, password } = req.body;
        User
            .findOne({
                where: { email }
            })
            .then(user => {
                if (user && isAuthorized(password, user.password)) {
                    res.status(200).json({ token: "disini kasih token ya" });
                } else {
                    throw {
                        statusCode: 404,
                        errors: [
                            {
                                message: "Invalid email or password"
                            }
                        ]
                    }
                }
            })
            .catch(err => {
                res.status(err.statusCode).json(err.errors[0].message);
                // next(err.errors.msg);
            });
    }

    static register(req, res, next) {
        const { email, password } = req.body;
        User
            .create({ email, password })
            .then(resAdd => {
                res.status(201).json(resAdd);
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err.errors[0].message);
            });
    }
}

module.exports = UsersController;