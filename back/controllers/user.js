const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            });
            user.save().then(
                () => {
                    res.status(201).json({
                        message: 'User added successfully!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    );
};

exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } }).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: 'User not found!'
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: 'Incorrect password'
                        });
                    }
                    const token = jwt.sign(
                        { userId: user.id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' });
                    res.status(200).json({
                        userId: user.id,
                        token: token
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error.message
                    });
                }
            );
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error.message
            });
        }
    );
};

exports.delete = (req, res, next) => {
    User.destroy({
        where: {
            id: req.params.id
        },
    }).then(res.status(200).json({
        message: 'User deleted successfully!'
    })).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );
};  