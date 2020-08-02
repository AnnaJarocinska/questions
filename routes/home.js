const express = require('express');
const router = express.Router();

router.get('/home', (req, res, next) => {
    res.send('GET request to the homepage')
 
});


module.exports = router;