const mongoose = require("mongoose");
const { Schema } = mongoose;
const saleSchema = new Schema({
  articles: [String],
  amounts: [Number],
  pricesDollar: [Number],
  pricesBs: [Number],
  totals: [Number],
});
module.exports = mongoose.model('sale', saleSchema);
