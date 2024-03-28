const jwt = require('jsonwebtoken');
const { unauthenticated } = require('../errors');

const authMiddleWare = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new unauthenticated('No token provideed');
  }
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new unauthenticated('Not authorized to access this route');
  }
};
module.exports = authMiddleWare;
