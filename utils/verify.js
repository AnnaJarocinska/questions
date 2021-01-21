const User = require('../models/users');

const verify = async (req, res, next) => {
    const sKey = req.cookies.key;
    const userVeryfied = await User.findOne({key: sKey});
    const adminVeryfied = userVeryfied.admin;
    if (!adminVeryfied)
    return res.status(401).json({
      msg: "Access denied!"
    });
  
next()
}
module.exports = verify;