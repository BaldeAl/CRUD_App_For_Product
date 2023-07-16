const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    unitPrice: Number,
    quantity: Number,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
//
