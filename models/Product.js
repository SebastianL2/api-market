const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    dateExpired: {
        type: Date,
    }
});

module.exports = model('product', ProductSchema);