const User = require('../models/users');

const verifyAdmin = async (req, res, next) => {
    const sKey = req.cookies.key;
    try{
    const userVeryfied = await User.findOne({key: sKey});
    const adminVeryfied = userVeryfied.admin;
    if (!adminVeryfied)
    return res.status(401).json({
      msg: "Access denied!"
    });
  
next()
} catch (err) {
  return res.status(401).json({
    err
  });
}
}
module.exports = verifyAdmin;