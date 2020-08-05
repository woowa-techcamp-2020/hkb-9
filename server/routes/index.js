const { Router } = require('express');
const userRouter = require('./user');
const cardRouter = require('./card');
const accountRouter = require('./account');
const passport = require('passport');

const router = Router();

router.use('/user', userRouter);
router.use(
  '/card',
  passport.authenticate('jwt', { session: false }),
  cardRouter,
);
router.use(
  '/account',
  passport.authenticate('jwt', { session: false }),
  accountRouter,
); // api/account

module.exports = router;
