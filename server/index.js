require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const { urlencoded, json } = require('express');
const apiRoutes = require('./routes');
const { SERVER_PORT } = require('./utils/constants');
const { errorHandler } = require('./middlewares/error');
const passportConfig = require('./lib/passport');

const app = express();

app.use(urlencoded({ extended: true }), json());
app.use(passport.initialize());
passportConfig();

app.use(morgan('dev'));

app.use('/api', apiRoutes);
app.use(errorHandler);

app.listen(SERVER_PORT, () => {
  console.log(`server is listening on port ${SERVER_PORT}`);
});
