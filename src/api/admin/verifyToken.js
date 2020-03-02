var jwt = require('jsonwebtoken');
var config = require('../../lib/config');

function verifyToken(req, res, next) {
  var Token = req.headers['x-access-token'];
  if (!Token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(Token, config.secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
    
    req.adminId = decoded.id;
    next();
  });
}

module.exports = verifyToken;