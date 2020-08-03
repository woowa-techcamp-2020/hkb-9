const { wrapAsync } = require('../utils/functions');

exports.createCard = async (connection, options) => {
  const { userId, name } = options;
  const result = await connection.query(`
    INSERT INTO card(user_id, name) VALUES(${userId}, '${name}');
  `);
  return result;
};
