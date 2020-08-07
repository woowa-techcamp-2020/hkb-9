const { Router } = require('express');
const { wrapAsync } = require('../../utils/functions');
const { validateCardBody } = require('../../utils/validation');
const {
  createCardController,
  getCardsController,
  deleteCardController,
} = require('./card-ctrl');

const router = Router();

router.post('/', validateCardBody, wrapAsync(createCardController));

router.get('/', wrapAsync(getCardsController));

router.delete('/:cardId', wrapAsync(deleteCardController));

module.exports = router;
