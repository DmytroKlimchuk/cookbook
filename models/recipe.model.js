const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim: true
    },
    description : {
        type : String,
        required : true,
        trim: true
    },
    imgPath : {
        type : String,
        required : true,
        trim: true
    },    
    ingredients: [{
        name : {
            type : String,
            required : true,
            trim: true
        },
        amount : {
            type : Number,
            required : true
        }
    }]

});

const Recipe = mongoose.model('recipes', recipeSchema);

module.exports = Recipe;