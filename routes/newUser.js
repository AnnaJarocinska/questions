const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', (req, res, next) => {

        User.find({name: req.body.name} , function(err, arr) {
          console.log(arr.length, 'arr w new user')
            if (arr.length > 0){
                res.send('rejection')
            }
            if (arr.length === 0) {
              res.send('created')
              User.create(req.body)  
            } 
            })
        .then(data => res.json(data))
        .catch(next) 
});

module.exports = router;