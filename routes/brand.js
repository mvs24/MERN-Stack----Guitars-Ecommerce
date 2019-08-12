const express = require("express");
const router = express.Router();
const Brand = require("../models/Brand");

const { auth } = require("../middleware/auth");
const { admin } = require("../middleware/admin");

router.post("/brand", auth, admin, (req, res) => {
  // Only admins can store brands

  const newBrand = new Brand(req.body);
  newBrand
    .save()
    .then(savedBrand => {
      res.status(200).json({
        succes: true,
        brand: savedBrand
      });
    })
    .catch(err => {
      res.status(400).json({ succes: false });
    });
});

router.get("/brands", (req, res) => {
  Brand.find({})
    .then(brands => {
      res.status(200).json({
        succes: true,
        brands
      });
    })
    .catch(err => {
      res.status(400).json({
        success: false
      });
    });
});

module.exports = router;
