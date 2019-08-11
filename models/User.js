const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, matched) {
    if (err) return callback(err);
    callback(null, matched);
  });
};

UserSchema.methods.generateToken = function(callback) {
  let user = this;
  let token = jwt.sign(user._id.toHexString(), process.env.SECRET);
  user.token = token;
  user
    .save()
    .then(user => {
      callback(null, user);
    })
    .catch(err => {
      return callback(err);
    });
};

UserSchema.statics.findByToken = function(token, cb) {
  let user = this;
  jwt.verify(token, process.env.SECRET, (err, decode) => {
    user.findOne({ _id: decode, token: token }, (err, user) => {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

module.exports = mongoose.model("user", UserSchema);
