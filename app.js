// generic imports
const express = require("express");
const mongoose = require("mongoose");
var autoIncrement = require('mongoose-sequence')(mongoose);
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();

// app - express
const app = express();