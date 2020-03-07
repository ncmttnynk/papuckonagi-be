var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var swaggerUi = require('swagger-ui-express');

const mongoose = require('mongoose');

var sneakerRoute = require('./routes/SneakerRoute');
var brandRoute = require('./routes/BrandRoute');
var orderRoute = require('./routes/OrderRoute');
var customerRoute = require('./routes/CustomerRoute');

var app = express();

swaggerDocument = require('./swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', sneakerRoute);
app.use('/', brandRoute);
app.use('/', orderRoute);
app.use('/', customerRoute);

mongoose.Promise = global.Promise;

mongoose.connect(
  // 'mongodb+srv://ncmttnynk:9oTMu39C4UMD5MIH@bookingclone-hkhfu.mongodb.net/test?retryWrites=true&w=majority',
  'mongodb://localhost:27017/papuckonagi',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) {
      console.log(`DB bağlantı hatası ${err}`);
      return;
    }
    console.log("MongoDB'ye bağlantı kuruldu.");
  },
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
