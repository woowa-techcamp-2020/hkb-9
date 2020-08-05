const { Router } = require('express');
const {
  createAccountController,
  deleteAccountController,
  updateAccountController,
  getAccountsController,
} = require('./account-ctrl');

const router = Router();

router.get('/', getAccountsController);
router.post('/', createAccountController);
router.delete('/:accountId', deleteAccountController);
router.put('/:accountId', updateAccountController);

module.exports = router;
