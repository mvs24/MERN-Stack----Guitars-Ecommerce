const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

const { auth } = require("../middleware/auth");
const { admin } = require("../middleware/admin");

router.post("/article", auth, admin, (req, res) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then(savedProduct => {
      res.status(200).json({
        success: true,
        article: savedProduct
      });
    })
    .catch(err => {
      res.status(400).json({ success: false });
    });
});

router.get("/articles_by_id", (req, res) => {
  // check if we have some ids or one
  let type = req.query.type;
  let items = req.query.id;
  if (type === "array") {
    let ids = items.split(",");
    items = [];
    items = ids.map(id => {
      return mongoose.Types.ObjectId(id);
    });
  }

  Product.find({ _id: { $in: items } })
  .populate('brand')
  .populate('wood')
  .exec((err, docs) => {
    return res.status(200).json({
      docs
    });
  });
});

module.exports = router;
