const pool = require('../../config/db');
const Account = require('../../model/account');

exports.createAccountController = async (req, res, next) => {
  const connection = await pool.getConnection();
  const options = req.body;
  options.userId = req.user.id;
  await Account.createAccount(connection, options);
  const accounts = await Account.getAccounts(connection, req.user.id);
  connection.release();
  res.status(201).json({ accounts });
};

exports.getAccountsController = async (req, res, next) => {
  const connection = await pool.getConnection();
  const rows = await Account.getAccounts(connection, req.user.id);
  connection.release();
  res.status(200).json({ accounts: rows });
};

exports.deleteAccountController = async (req, res, next) => {
  const connection = await pool.getConnection();
  const affectedRows = await Account.deleteAccount(
    connection,
    req.params.accountId,
  );
  connection.release();
  res.status(200).json({ affectedRows });
};

exports.updateAccountController = async (req, res, next) => {
  const connection = await pool.getConnection();
  const affectedRows = await Account.updateAccount(
    connection,
    req.params.accountId,
    req.body,
  );
  res.status(200).json({ affectedRows });
};
