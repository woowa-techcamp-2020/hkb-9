const { Router } = require('express');
const {
  createAccountController,
  deleteAccountController,
  updateAccountController,
  getAccountsController,
} = require('./account-ctrl');
const passport = require('passport');

const router = Router();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  getAccountsController,
);
router.post('/', createAccountController); // jwt strategy, validation 추가해야해
router.delete('/:accountId', deleteAccountController);
router.put('/:accountId', updateAccountController);

module.exports = router;
