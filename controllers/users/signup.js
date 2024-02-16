const { User } = require('../../models/user');
const HttpError = require('../../helpers/HttpError');
const controllerWrapper = require('../../decorators/controllerWrapper');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const { SECRET_KEY } = process.env;

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });
  res.status(201).json({
    email: newUser.email,
  });
};
module.exports = signup;