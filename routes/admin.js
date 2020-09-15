const express = require('express');
const router = express.Router();

router.all('*', (req, res, next) => {
    // if(req.session.admin){
        if(req.cookies.name === 'admin'){
        console.log('adminnnnnnn');
        // res.redirect('/users');
        // res.redirect('http://google.com');
        // res.write('hello admin')
        // res.send('hello');
        // console.log(req.cookies)
    }
    if(!req.cookies.name === 'admin'){
        console.log('no admin');
        res.location('/users');
        res.sendStatus(302);
        // res.redirect('/users');
        return;
    }
    next();
})

router.get('/', (req, res, next) => {
   console.log(req.cookies.name, 'req.cookies.name w admin.js')
 
});


module.exports = router;