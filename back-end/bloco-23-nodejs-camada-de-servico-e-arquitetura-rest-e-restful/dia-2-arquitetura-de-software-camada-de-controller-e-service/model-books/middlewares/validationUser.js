
const validationCamp = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  if (!first_name || !last_name || !email || !password) {
    return res.status(401).json({ message: "Alguns dos campos estão vazios!!" });
  }
  if (password.length < 6 || typeof password !== 'string'){
    return res.status(401).json({ message: "\"password\" length must be at least 6 characters long" });
  }

  next();
}

module.exports = validationCamp;