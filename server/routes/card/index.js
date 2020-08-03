const { Router } = require('express');
const passport = require('passport');
const { validateCardBody } = require('../../utils/validation');

const router = Router();

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validateCardBody,
);

module.exports = router;
