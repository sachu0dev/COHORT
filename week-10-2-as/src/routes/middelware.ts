import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(403).send("Unauthorized");
  } else {
    const splitToken: string[] = token.split(" ");
    jwt.verify(splitToken[1], "secret", (err, user) => {
      if (err) {
        res.status(403).send("Unauthorized");
      } else {
        req.user = user;

        next();
      }
    });
  }
};

export default authMiddleware;
