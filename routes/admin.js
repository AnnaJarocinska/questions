const express = require('express');
const router = express.Router();

router.all('*', (req, res, next) => {
    if(req.session.admin){
        // if(req.cookies.name === 'admin'){
        console.log('adminnnnnnn', req.session.admin);
       
    }
    if(!req.session.admin){
    // if(!req.cookies.name === 'admin'){
        console.log('no admin');
        return;
    }
    next();
})

router.get('/', (req, res, next) => {
    console.log(req.cookies.name, 'req.cookies.name w admin.js')
    res.send(req.cookies.name)
});


module.exports = router;