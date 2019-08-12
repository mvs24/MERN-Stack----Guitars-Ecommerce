const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

require("dotenv").config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }).then(() => {
  console.log("MongoDB connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const user = require("./routes/user");
const brand = require("./routes/brand");
const wood = require("./routes/wood");
const product = require('./routes/product')


app.use("/api/users", user);
app.use("/api/product", brand);
app.use("/api/product", wood);
app.use('/api/product', product)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Connected on port " + port);
});
