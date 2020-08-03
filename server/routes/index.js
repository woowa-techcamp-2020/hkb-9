const { Router } = require('express');
const userRouter = require('./user');
const cardRouter = require('./card');

const router = Router();

router.use('/user', userRouter);
router.use('/card', cardRouter);

module.exports = router;
