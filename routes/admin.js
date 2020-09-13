const express = require('express');
const router = express.Router();

router.all('*', (req, res, next) => {
    if(req.session.admin){
        console.log('adminnnnnnn')
    }
    if(!req.session.admin){
        res.redirect('/login');
        return;
    }
    next();
})

router.get('/', (req, res, next) => {
   console.log(req.session.admin, 'req.session.admin w admin.js b')
 
});


module.exports = router;