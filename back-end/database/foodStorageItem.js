const mongoose = require('mongoose');

const foodStorageSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: Number, required: true },
    defaultTime: { type: Number, required: true },
    shortTime: { type: Number, required: true },
    averageTime: { type: Number, required: true },
    longTime: { type: Number, required: true },
});

module.exports = mongoose.model('foodStorage', foodStorageSchema);