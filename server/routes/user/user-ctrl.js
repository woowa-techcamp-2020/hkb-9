const JWT = require('jsonwebtoken');
const pool = require('../../config/db');
const User = require('../../model/user');
const { createPasswordHash } = require('../../utils/salt');

exports.createUserController = async (req, res, next) => { // create user
  try {
    const { loginId, password } = req.body;
    const connection = await pool.getConnection();
    if (await User.getUserByLoginId(connection, loginId)) {
      res.status(409).json('');
      return;
    }

    const passwordHash = await createPasswordHash(password);
    await User.createUser(connection, {
      loginId,
      passwordHash,
    });
    res.status(201).json('');
  } catch (e) {
    next(e);
  }
};

function createAccessToken(userId) {
  const payload = { userId };
  return JWT.sign(payload, process.env.JWT_SECRET);
}

exports.loginController = async (req, res) => {
  const accessToken = createAccessToken(req.user.id);
  res.status(200).json({ accessToken });
};

exports.testController = (req, res) => {
  res.status(200).json({ user: req.user });
};
