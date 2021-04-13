"use strict";
/** Require the Http-errors to create http errors for express
 * {@link https://www.npmjs.com/package/http-errors/}
    @constant
    @type {object}
 */
var createError = require("http-errors");
/** Require express framework
 * {@link https://expressjs.com/}
    @constant
    @type {object}
 */
var express = require("express");
/** Require path
    @constant
    @type {object}
 */
var path = require("path");
/** Require cookie-parser
*{@link https://www.npmjs.com/package/cookie-parser/}
    @constant
    @type {object}
 */
var cookieParser = require("cookie-parser");
/** Require body-parser
    @constant
    @type {object}
 */
var bodyParser = require("body-parser");
/** Require http request logger middleware morgan
*{@link https://www.npmjs.com/package/morgan/}
    @constant
    @type {object}
 */
var logger = require("morgan");

/** Require mongoose
    @constant
    @type {object}
 */
var mongoose = require("mongoose");

/** Require dotenv
   {@link https://www.npmjs.com/package/dotenv}
   @type {object}
*/
require("dotenv").config();

/** Require utility functions
 @constant
 @type {object}
*/
const utils = require("./lib/utils");

/** Require the index route
    @constant
    @type {object}
 */
var indexRouter = require("./routes/index");

/** Require the country route
    @constant
    @type {object}
 */
var countryRouter = require("./routes/country");

var app = express();

// Setip DB connection
utils.connectMongoDB();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//routes to handle requests
app.use("/", indexRouter);
app.use("/country", countryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
