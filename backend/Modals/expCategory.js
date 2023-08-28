const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
        username:String,
        category: String,
        option: String,
        color:String
        });
// Compile model from schema
const SomeModel = mongoose.model('expcategory', SomeModelSchema );
module.exports = SomeModel