import jwt from 'jsonwebtoken';


const generateToken = (id, email) => {
  const token = jwt.sign({
    id, email,
  }, process.env.TOKEN);
  return token;
};

export default generateToken;
