import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verify = async (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    const payload = await jsonwebtoken.verify(token, process.env.TOKEN);
    req.user = payload;
    next();
  } else {
    res.status(401).json({
      status: 401,
      message: 'You need to log in first',
    });
  }
};

export default verify;
