const User = require('../models/users');

const verifyUser = async (req, res, next) => {
    const sKey = req.cookies.key;
    try{
    const userVeryfied = await User.findOne({key: sKey});
    if (!userVeryfied)
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
module.exports = verifyUser;