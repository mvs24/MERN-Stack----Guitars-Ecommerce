const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
    unique: true
  },

});


module.exports = mongoose.model("brand", BrandSchema);
