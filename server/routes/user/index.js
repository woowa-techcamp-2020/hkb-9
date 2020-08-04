const { Router } = require('express');
const passport = require('passport');
const { wrapAsync } = require('../../utils/functions');
const {
  validateUserBody,
  validateUserLoginBody,
} = require('../../utils/validation');
const { createUserController, loginController } = require('./user-ctrl');

const router = Router();

router.post('/', validateUserBody, wrapAsync(createUserController));
router.post(
  '/login',
  validateUserLoginBody,
  passport.authenticate('local', { session: false }),
  loginController,
);

module.exports = router;
