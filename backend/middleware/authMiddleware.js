const { verifyToken } = require("../services/authService");
const { findUserById } = require("../database/db");

async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Authentication required. Please log in.",
    });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({
      message: "Invalid or expired token. Please log in again.",
    });
  }

  const user = await findUserById(decoded.id);
  if (!user) {
    return res.status(401).json({
      message: "User account not found.",
    });
  }

  req.user = user;
  next();
}

async function optionalAuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    if (decoded) {
      const user = await findUserById(decoded.id);
      if (user) {
        req.user = user;
      }
    }
  }
  next();
}

module.exports = {
  authMiddleware,
  optionalAuthMiddleware,
};
