const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(savedUser => {
      res.status(200).json({ success: true, userData: savedUser });
    })
    .catch(err => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;
