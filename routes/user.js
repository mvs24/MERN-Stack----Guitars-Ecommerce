const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const { auth } = require("../middleware/auth");

router.post("/register", (req, res) => {
  const newUser = new User(req.body);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash;
      newUser
        .save()
        .then(savedUser => {
          res.status(200).json({ success: true, userData: savedUser });
        })
        .catch(err => {
          res.status(400).json({ success: false, error: err });
        });
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.json({ loginSuccess: false, message: "Email not found" });
    }
    user.comparePassword(req.body.password, (err, matched) => {
      if (matched) {
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          res
            .cookie("w_auth", user.token)
            .status(200)
            .json({
              loginSuccess: true
            });
        });
      } else {
        return res.json({ loginSuccess: false, message: "Invalid Password" });
      }
    });
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user.id }, { token: "" }, (err, doc) => {
    if (err) return res.status(400).json({ success: false });
    return res.status(200).json({ success: true });
  });
});

router.get("/auth", auth, function(req, res) {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    cart: req.user.cart,
    history: req.user.history
  });
});

module.exports = router;
