exports.getUserByLoginId = async (connection, loginId) => {
  const [user] = await connection.query(
    `SELECT * FROM user WHERE login_id='${loginId}'`,
  );
  return user[0];
};

exports.getUserById = async (connection, id) => {
  const [user] = await connection.query(`SELECT * FROM user WHERE id=${id}`);
  return user[0];
};

exports.findOne = async (connection, loginId, password) => {
  const [user] = await connection.query(
    `SELECT * FROM user WHERE login_id='${loginId} and password='${password}' limit 1`,
  );
  return user[0];
};

exports.createUser = async (connection, option) => {
  const {
    loginId,
    name,
    passwordHash: { password, salt },
  } = option;
  const [insertId] = await connection.query(
    `INSERT INTO user(login_id, password, name, salt) VALUES('${loginId}', '${password}', '${name}', '${salt}')`,
  );
  return insertId;
};
