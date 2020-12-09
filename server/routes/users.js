const router = require('express').Router();

let User = require('../models/user.model');
const config = require('../config.json');
const jwt = require('jsonwebtoken');
//const userService = require('../services/user.service');


router.route('/signup').post((req, res) => {
    const newUser = new User(req.body)

    newUser.save()
    .then (() => res.json('User added!'))
    .catch (err => res.status(400).json('Error: ' + err)); 
});

router.route('/').get((req, res) => {
    User.find()
    .then (users => res.json(users))
    .catch (err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findOne({username:req.params.id})
    .then (user => res.json(user))
    .catch (err => res.status(400).json('Error: ' + err));
});

router.route('/edituser/:id').post((req, res) => {
    User.findOneAndUpdate( {username:req.params.id}, {
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin
        })
    .then (() => res.json('User Updated!'))
    .catch (err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    User.findOneAndDelete({username:req.params.id})
    .then(() => res.json('User deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
});



router.route('/login').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
 

    if (username && password) {
        User.findOne({username})
        .then (user => {
            if (!user) {   
                res.status(403).json({
                    message: 'Username Incorrect!'
                });
            }
            
            if (user.password === password) {

                let token = jwt.sign({username: username}, config.secret, {expiresIn: '24h'});
                res.json({
                    message: 'Authentication successful!',
                    token: token
                });
            }
            else {
                res.status(403).json({
                    message: 'Password Incorrect!'
                });
            }
        })
    }

    else {
        res.status(400).json({
            message: 'Authentication failed! Problematic Request.'
        });
    }

})




module.exports = router;
