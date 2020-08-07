const pool = require('../../config/db');
const Card = require('../../model/card');

exports.createCardController = async (req, res) => {
  const {
    body: { name }, // card name
    user,
  } = req;

  const connection = await pool.getConnection();
  await Card.createCard(connection, { userId: user.id, name });
  const cards = await Card.getCards(connection, user.id);
  connection.release();
  res.status(201).json({ cards });
};

exports.getCardsController = async (req, res) => {
  const { user } = req;
  const connection = await pool.getConnection();
  const cards = await Card.getCards(connection, user.id);
  connection.release();
  res.status(200).json({ cards });
};

exports.deleteCardController = async (req, res) => {
  const {
    params: { cardId },
    user,
  } = req;
  const connection = await pool.getConnection();
  await Card.deleteCard(connection, cardId);
  const cards = await Card.getCards(connection, user.id);
  connection.release();
  res.status(200).json({ cards });
};
