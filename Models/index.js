const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
});

storeSchema.index({
    name: 'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    },
});

const Store = mongoose.model('Store', storeSchema);

module.exports = {
    Store
};