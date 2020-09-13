const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', (req, res, next) => {

        User.find({name: req.body.name, password: req.body.password} , function(err, arr) {
            if (arr.length > 0 && arr[0].admin){
                // res.send('admin');
                // req.session.admin = 1;   
                res.redirect('/users');
            }
            if (arr.length > 0 && arr[0].admin === false){
                res.send('verified')
            }
            if (arr.length === 0) {
                res.send('rejection')
            } 
            })
        // .then(data => res.json(data))
        .catch(next)    
          
});

module.exports = router;