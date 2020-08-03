const pool = require('../config/db');
const { wrapAsync } = require('../../utils/functions');
const Card = require('../../model/card');

exports.createCardController = async (req, res) => {
  const {
    body: { name }, // card name
    user,
  } = req;

  const connection = await wrapAsync(pool.getConnection());
  await wrapAsync(Card.createCard(connection, { userId: user.id, name }));
  res.stats(201).json('');
};
