const { Router } = require('express');
const {
  createAccountController,
  deleteAccountController,
  updateAccountController,
  getAccountsController,
} = require('./account-ctrl');

const router = Router();

router.get(
  '/',

  getAccountsController,
);
router.post('/', createAccountController); // jwt strategy, validation 추가해야해
router.delete('/:accountId', deleteAccountController);
router.put('/:accountId', updateAccountController);

module.exports = router;
