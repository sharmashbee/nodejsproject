var jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

async function verifyToken(req, res, next) {
  try{
    var Token = await req.headers['x-access-token'];
    if (!Token) res.status(403).send({ auth: false, message: 'No token provided.' });
    else{
        jwt.verify(Token, SECRET, function(err, decoded) {
        if (err) res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
         
          req.adminId = decoded.id;
          next();
        }  
      });
    }  
  }
  catch(err){
    next(err);
  }
}
module.exports = verifyToken;
 
  