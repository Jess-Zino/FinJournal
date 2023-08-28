const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
        username: String,
        amount: Number,
        selectedcategory: String,
        option:String,
        }, { timestamps : true } );

// Compile model from schema
const SomeModel = mongoose.model('transactions', SomeModelSchema );
module.exports = SomeModel