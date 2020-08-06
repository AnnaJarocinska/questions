const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', (req, res, next) => {

        User.find({name: req.body.name} , function(err, arr) {
          console.log(arr.length, 'arr')
            if (arr.length > 0){
                res.send('rejection')
            }
            if (arr.length === 0) {
              User.create(req.body)
              res.send('created')
        .then(data => res.json(data))
        .catch(next)   
            } 
            })
        .then(data => res.json(data))
        .catch(next) 
  
//   console.log( req.body, 'req.body w newuser')
//     User.create(req.body)
//         .then(data => res.json(data))
//         .catch(next)

          
});

module.exports = router;