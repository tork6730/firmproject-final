﻿var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', function (req, res) {
    // register using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + '/users/register',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            return res.render('register', { error: 'An error occurred' });
        }

        if (response.statusCode !== 200) {
            return res.render('register', {
                error: response.body,
                fullName: req.body.fullName,
                username: req.body.username,
                phone: req.body.phone,


            });
        }

        // return to login page with success message
        req.session.success = 'Registration successful, please check your email to confirm your account';
        return res.redirect('/login');
    });
});

module.exports = router;