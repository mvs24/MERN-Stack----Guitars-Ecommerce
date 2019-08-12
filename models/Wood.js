const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WoodSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
    unique: true
  }
});

module.exports = mongoose.model("wood", WoodSchema);
