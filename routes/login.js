const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', (req, res, next) => {

        User.find({name: req.body.name, password: req.body.password} , function(err, arr) {
          console.log(arr.length, 'arr w login')
            if (arr.length > 0){
                res.send('verified')
            }
            if (arr.length === 0) {
                    res.send('rejection')
            } 
            })
        .then(data => res.json(data))
        .catch(next)        
});

module.exports = router;