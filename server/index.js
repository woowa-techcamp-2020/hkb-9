require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const appRoot = require('app-root-path');
const passport = require('passport');
const { urlencoded, json } = require('express');
const apiRoutes = require('./routes');
const { SERVER_PORT } = require('./utils/constants');
const { errorHandler } = require('./middlewares/error');
const passportConfig = require('./lib/passport');

const app = express();

app.use(urlencoded({ extended: true }), json());
app.use(express.static(appRoot.resolve('client/dist')));
app.use(passport.initialize());
passportConfig();

app.use(morgan('dev'));

app.use('/api', apiRoutes);
app.use((req, res) => {
  res.sendFile(appRoot.resolve('client/dist/index.html'));
});

app.use(errorHandler);

app.listen(SERVER_PORT, () => {
  console.log(`server is listening on port ${SERVER_PORT}`);
});
