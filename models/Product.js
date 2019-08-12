const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 30,
      unique: true
    },
    description: {
      type: String,
      required: true,
      maxlength: 300
    },
    price: {
      type: Number,
      required: true,
      maxlength: 255
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "brand",
      require: true
    },
    shipping: {
      type: Boolean,
      required: true
    },
    available: {
      type: Boolean,
      required: true
    },
    wood: {
      type: Schema.Types.ObjectId,
      ref: "wood",
      require: true
    },
    frets: {
      type: Number,
      require: true
    },
    sold: {
      type: Number,
      maxlength: 25,
      default: 0
    },
    publish: {
      type: Boolean,
      require: true
    },
    images: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
