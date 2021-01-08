const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Keys = require('../models/keys');
const bcrypt = require('bcryptjs');

router.post('/', (req, res, next) => {

        User.find({name: req.body.name} , function(err, arr) {
            if (arr.length > 0){
                res.send('rejection')
            }
            if (arr.length === 0) {
              // res.send('created')
            (async () => {
              const salt = await bcrypt.genSalt(10);
    
              let userid = 3
              let username = req.body.name
              let hashedPassword = await bcrypt.hash(req.body.password, salt);
              const newUser = new User({
                id: userid,
                name: username,
                password: hashedPassword,
              });
              newUser.save()
            })()    
            } 
            })
            
        .then(data => res.json(data))
        .catch(next)
          
});

module.exports = router;