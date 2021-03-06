/**
 * Created by smartankur4u on 6/7/18.
 */

const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {

  try {
    const token = req.headers.authorization.split(' ')[1]
    console.log('token=' + token)
    const decoded = jwt.verify(token, process.env.JWT_KEY)
    req.userData = decoded
    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Token Auth Failed'
    })
  }
}


