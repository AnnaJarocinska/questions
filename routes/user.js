const express = require('express');
const router = express.Router();

router.all('*', (req, res, next) => {
 
        if(req.cookies.name === 'user'){
        console.log('userrrrrrrr');
       
    }
    if(!req.cookies.name === 'user'){
        console.log('no user');
        res.redirect('/login');
        return;
    }
    next();
})

router.get('/', (req, res, next) => {
   console.log(req.cookies.name, 'req.cookies.name w admin.js')
 
});


module.exports = router;