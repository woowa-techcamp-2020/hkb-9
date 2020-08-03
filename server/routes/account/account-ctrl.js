const pool = require('../../config/db');
const Account = require('../../model/account');

exports.createAccountController = async (req, res, next) => {
  const connection = await pool.getConnection();
  try {
    const insertId = await Account.createAccount(connection, req.body);
    connection.release();
    res.status(201).json({ insertId });
  } catch (e) {
    connection.release();
    next(e);
  }
};

exports.getAccountsController = async (req, res, next) => {
  console.log(req.user.id);
  const connection = await pool.getConnection();
  try {
    const rows = await Account.getAccounts(connection, req.user.id);
    connection.release();
    res.status(200).json({ accounts: rows });
  } catch (e) {
    connection.release();
    next(e);
  }
};

exports.deleteAccountController = async (req, res, next) => {
  const connection = await pool.getConnection();
  try {
    const affectedRows = await Account.deleteAccount(
      connection,
      req.params.accountId,
    );
    connection.release();
    res.status(200).json({ affectedRows });
  } catch (e) {
    connection.release();
    next(e);
  }
};

exports.updateAccountController = async (req, res, next) => {
  try {
    const connection = await pool.getConnection();
    const affectedRows = await Account.updateAccount(
      connection,
      req.params.accountId,
      req.body,
    );
    res.status(200).json({ affectedRows });
  } catch (e) {
    connection.release();
    next(e);
  }
};
