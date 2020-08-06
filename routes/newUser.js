const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', (req, res, next) => {

        // User.find({name: req.body.name, password: req.body.password} , function(err, arr) {
        //   console.log(arr.length, 'arr')
        //     if (arr.length > 0){
        //         res.send('verified')
        //     }
        //     if (arr.length === 0) {
        //             res.send('rejection')
        //     } 
        //     })
        // .then(data => res.json(data))
        // .catch(next) 
  

    // User.create(req.body)
    //     .then(data => res.json(data))
    //     .catch(next)

    const usersdata = new User({
        name: 'kicia kocia',
          email: 'name@name.com',
          password: '123',
    })
            
        usersdata.save()
          
});

module.exports = router;