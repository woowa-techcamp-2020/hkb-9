const { Router } = require('express');
const passport = require('passport');
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
<<<<<<< HEAD
);
=======
); // api/account
>>>>>>> feat/30-fe-mainpage-additional

module.exports = router;
