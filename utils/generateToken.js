import jwt from "jsonwebtoken";

const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,      // MUST be false on localhost
    sameSite: "lax",    // IMPORTANT
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
