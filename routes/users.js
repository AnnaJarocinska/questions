const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', (req, res, next) => {
    // User.find({})
    // .then(data => res.json(data))
    // .catch(next)  
});

router.post('/', (req, res, next) => {

    if (req.body.name === 'ania'){
        console.log(req.body.name)
        res.send(req.body.name)
    }

    console.log(req.body, 'req.body w post users')

    // User.create(req.body)
    //     .then(data => res.json(data))
    //     .catch(next)

    // const usersdata = new User({
    //     name: 'Name',
    //       email: 'name@name.com',
    //       password: 'qwerty',
    // })
            
    //     usersdata.save()
          
});

module.exports = router;