const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PokemonSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sprites: {
        type: Object,
        default: {}
    },
    types: {
        type: Array,
    },
    chain: {
        type: Array,
        default: []
    },
    weight: {
        type: Number,
        default: 0
    },
    height: {
        type: Number,
        default: 0
    },
    abilities: {
        type: Array,
        default: []
    },
    locations: {
        type: Array,
        default: []
    },
    timestamp: {
        type: Number,
        default: Date.now
    }

});
module.exports = mongoose.model("Pokemon", PokemonSchema);