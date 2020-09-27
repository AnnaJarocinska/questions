const cookieSession = require('cookie-session');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cookieParser = require('cookie-parser');
// const cors = require('cors');

const api = require('./routes/api');
const login = require('./routes/login');
const newUser = require('./routes/newUser');
const users = require('./routes/users');
const admin = require('./routes/admin');
const user = require('./routes/user');

// const path = require('path');
require('dotenv').config();

const app = express();

// app.set('trust proxy', 1) // trust first proxy
// 
// app.use(cors());
app.use(cookieParser())
app.use(cookieSession({
  name: 'session',
  keys: config.keySession,
  maxAge: config.maxAgeSession
}))

// app.use(express.static(path.join(__dirname, 'client')))

// This allows you to set req.session.maxAge to let certain sessions
// have a different value than the default.
// app.use(function (req, res, next) {
//   req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge
// })

// app.use(function(req, res, next){
//   res.locals.path = req.path;
//   next();
// })

app.use(bodyParser.json());

const router = express.Router();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
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
app.use('/login', login);
app.use('/newUser', newUser);
app.use('/users', users);
app.use('/admin', admin);
app.use('/user', user);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});