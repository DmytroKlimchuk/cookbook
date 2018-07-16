const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({    
    recipeID: {
        type: Schema.Types.ObjectId,
        ref: 'recipes'
    },
    name : {
        type : String,
        required : true,
        trim: true
    },
    amount : {
        type : Number,
        required : true
    }

});

const Ingredient = mongoose.model('ingredients', ingredientSchema);

module.exports = Ingredient;