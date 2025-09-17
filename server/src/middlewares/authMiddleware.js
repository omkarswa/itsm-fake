import jwt from "jsonwebtoken" ;
import User from "../models/auth.model.js";
const JWT_SECRET = process.env.JWT_SECRET||"I_AM_THE_NIGHT_CODER_NIRVIKAR" ;



// export default async function protect(req, res, next) {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer "))
//       return res.status(401).json({ message: "Not authorized" });

//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, JWT_SECRET);
//     if (!decoded) return res.status(401).json({ message: "Invalid token" });

//     // attach user info (id, role)
//     req.user = { id: decoded.id, role: decoded.role };
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ message: "Not authorized" });
//   }
// }


// // export const authorize = (...allowedRoles) => {
// //   return (req, res, next) => {
// //     if (!req.user) return res.status(401).json({ message: "Not authorized" });
// //     if (!allowedRoles.includes(req.user.role)) {
// //       return res.status(403).json({ message: "Forbidden: insufficient role" });
// //     }
// //     next();
// //   };
// // };
export default async function protect(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ message: "Not authorized" });

    const token = authHeader.split(" ")[1];
    console.log("✅ Token received:", token);

    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("✅ Token decoded payload:", decoded);

    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    res.status(401).json({ message: "Not authorized - token invalid or expired" });
  }
}
