exports.createAccount = async (connection, options) => {
  // 2020-12-03 HH:mm:sss
  const {
    type,
    category,
    amount,
    content,
    month,
    paymentDate,
    cardId,
    userId,
  } = options;

  const [{ insertId }] = await connection.query(
    `INSERT INTO account(type, category, amount, content, month, payment_date, card_id, user_id) 
     VALUES('${type}', '${category}', ${amount}, '${content}', ${month}, ${paymentDate}, ${cardId}, ${userId})`,
  );
  return insertId;
};

exports.getAccounts = async (connection, userId) => {
  const [rows] = await connection.query(
    `SELECT A.*, C.name FROM account as A JOIN card as C on A.card_id = C.id WHERE A.user_id=${userId}`,
  );
  return rows;
};

exports.deleteAccount = async (connection, id) => {
  const [{ affectedRows }] = await connection.query(
    `delete from account where id=${id}`,
  );
  return affectedRows;
};

exports.updateAccount = async (connection, id, options) => {
  const {
    type,
    category,
    amount,
    content,
    month,
    paymentDate,
    cardId,
    userId,
  } = options;

  const [{ affectedRows }] = await connection.query(
    `UPDATE account SET type='${type}', category='${category}', 
    amount=${amount}, content='${content}', month=${month}, payment_date=${paymentDate},
    card_id=${cardId}, user_id=${userId} WHERE id=${id}`,
  );

  return affectedRows;
};
