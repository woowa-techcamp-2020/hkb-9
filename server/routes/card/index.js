const { Router } = require('express');
const passport = require('passport');
const { wrapAsync } = require('../../utils/functions');
const { validateCardBody } = require('../../utils/validation');
const {
  createCardController,
  getCardsController,
  deleteCardController,
} = require('./card-ctrl');

const router = Router();

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validateCardBody,
  wrapAsync(createCardController),
);

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  wrapAsync(getCardsController),
);

router.delete(
  '/:cardId',
  passport.authenticate('jwt', { session: false }),
  wrapAsync(deleteCardController),
);

module.exports = router;
