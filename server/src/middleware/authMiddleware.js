
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      res.status(401);
      throw new Error("Not authorized. Please log in.");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      res.status(401);
      throw new Error("Admin account not found.");
    }

    req.admin = admin;

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError" ||
        error.name === "TokenExpiredError") {
      res.status(401);
      return next(new Error("Invalid or expired session."));
    }

    next(error);
  }
};
