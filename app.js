var createError = require('http-errors');

var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
var cors = require('cors');

// const swaggerJsdoc = require('swagger-jsdoc');

// const options = {
//   swaggerDefinition: {
//     // Like the one described here: https://swagger.io/specification/#infoObject
//     info: {
//       title: 'Papuç Konağı API',
//       version: '1.1.1',
//       description: 'Papuç Konağı projesinde kullanılacak api dökümantasyonunu içermektedir.',
//     },
//     definitions: ['./model/*.js'],
//   },
//   apis: ['./routes/*.js'],
// };

// const specs = swaggerJsdoc('options');

const swaggerUi = require('swagger-ui-express');

const sequelize = require('./database/db');
const helmet = require('helmet');
const compression = require('compression');

var sneakerRoute = require('./routes/SneakerRoute');
var brandRoute = require('./routes/BrandRoute');
// var orderRoute = require('./routes/OrderRoute');
// var customerRoute = require('./routes/CustomerRoute');

var app = express();
swaggerDocument = require('./swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const Brand = require('./model/Brand');
const Sneaker = require('./model/Sneaker');

Sneaker.belongsTo(Brand);
Brand.hasMany(Sneaker);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
  );
  next();
});

app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(helmet());
app.use(compression());

app.use('/', sneakerRoute);
app.use('/', brandRoute);
// app.use('/', orderRoute);
// app.use('/', customerRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

var opn = require('opn');

//Connection
sequelize
  //.sync()
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(process.env.PORT || 3001);
    opn('http://localhost:3000/swagger/', { app: 'firefox' });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
