const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secret123';

exports.registerUser = (req, res, next) => {
    
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    bcrypt.hash(newUser.password, 10, (err, hash) => {
        if(err) return res.status(500).send('Server error');
        newUser.password = hash;
        User.create(newUser)
        .then(user => {
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                expiresIn: expiresIn
            });

            res.send({ accessToken, expiresIn });
        })
        .catch(err => {
            res.status(500).send(err);
        });
    });
}


exports.loginUser = ( req, res, next ) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: userData.email })
    .then(user => {
        if(!user){
            res.status(409).send('User does not exist');
        }else {
            bcrypt.compare(userData.password, user.password)
            .then(result => {
                if(result){
                    const expiresIn = 24 * 60 * 60;
                    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                        expiresIn: expiresIn
                    });
                    res.send({accessToken, expiresIn});
                }else {
                    res.status(409).send('Incorrect password');
                }
            })
            .catch(err => {
                res.status(500).send(err);
            });
        }
    })
    .catch(err => {
        res.status(500).send('Server error');
    });
}

exports.logoutUser = (req, res, next) => {
    const accessToken = req.headers['authorization'];
    const userData = {
        email: req.body.email
    }
    if (!accessToken) {
        return res.status(401).send('Access token not found');
    }
    jwt.verify(accessToken, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).send('Invalid access token');
        } else {
            User.findOne({email: userData.email})
                .then(user => {
                    if (!user) {
                        return res.status(404).send('User not found');
                    }else {
                        res.send({message: 'User logged out successfully', token: null});
                    }
                    res.send('User logged out successfully');
                })
                .catch(err => {
                    res.status(500).send('Server error');
                });
        }
    });
}
