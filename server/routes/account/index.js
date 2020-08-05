const { Router } = require('express');
const {
  createAccountController,
  deleteAccountController,
  updateAccountController,
  getAccountsController,
} = require('./account-ctrl');

const router = Router();

<<<<<<< HEAD
router.get('/', getAccountsController);
router.post('/', createAccountController);
=======
router.get(
  '/',

  getAccountsController,
);
router.post('/', createAccountController); // jwt strategy, validation 추가해야해
>>>>>>> feat/30-fe-mainpage-additional
router.delete('/:accountId', deleteAccountController);
router.put('/:accountId', updateAccountController);

module.exports = router;
