const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
        username: String,
         password: String,
         firstname: String,
         lastname: String,
         email: String,
});
// Compile model from schema
const SomeModel = mongoose.model('users', SomeModelSchema );
module.exports = SomeModel