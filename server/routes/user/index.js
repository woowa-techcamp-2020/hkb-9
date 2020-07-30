const { Router } = require('express');
const passport = require('passport');
const { validateUserBody } = require('../../utils/validation');
const { createUserController, loginController, testController } = require('./user-ctrl');

const router = Router();

router.post('/', validateUserBody, createUserController);
router.post('/login', validateUserBody, passport.authenticate('local', { session: false }), loginController);

router.get('/test', passport.authenticate('jwt', { session: false }), testController);

module.exports = router;
