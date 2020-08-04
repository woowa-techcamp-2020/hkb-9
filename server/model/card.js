const { wrapAsync } = require('../utils/functions');

exports.createCard = async (connection, options) => {
  const { userId, name } = options;
  const result = await connection.query(`
    INSERT INTO card(user_id, name) VALUES(${userId}, '${name}');
  `);
  return result;
};

exports.getCards = async (connection, userId) => {
  const [rows] = await connection.query(
    `SELECT * FROM card WHERE user_id=${userId}`,
  );
  return rows;
};

exports.deleteCard = async (connection, cardId) => {
  const [affectedRows] = await connection.query(
    `DELETE FROM card WHERE id=${cardId}`,
  );
  return affectedRows;
};
