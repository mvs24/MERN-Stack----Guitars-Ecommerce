const express = require("express");
const router = express.Router();
const Wood = require("../models/Wood");

const { auth } = require("../middleware/auth");
const { admin } = require("../middleware/admin");

router.post("/wood", auth, admin, (req, res) => {
  // Only admins can store woods
  const newWood = new Wood(req.body);
  newWood
    .save()
    .then(savedWood => {
      res.status(200).json({
        succes: true,
        wood: savedWood
      });
    })
    .catch(err => {
      res.status(400).json({ succes: false });
    });
});

router.get("/woods", (req, res) => {
  Wood.find({})
    .then(woods => {
      res.send(woods)
    })
    .catch(err => {
      res.status(400).json({
        success: false
      });
    });
});

module.exports = router;
