const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const api = require('./routes/api');
const users = require('./routes/users');
const home = require('./routes/home');

const path = require('path');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const router = express.Router();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', router);
app.use('/api', api);
app.use('/login', users);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});