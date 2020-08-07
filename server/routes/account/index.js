const { Router } = require('express');
const {
  createAccountController,
  deleteAccountController,
  updateAccountController,
  getAccountsController,
} = require('./account-ctrl');
const { wrapAsync } = require('../../utils/functions');

const router = Router();

router.get('/', wrapAsync(getAccountsController));
router.post('/', wrapAsync(createAccountController));
router.delete('/:accountId', wrapAsync(deleteAccountController));
router.put('/:accountId', wrapAsync(updateAccountController));

module.exports = router;
