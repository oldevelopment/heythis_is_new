
const mongoose = require('mongoose');

const { Schema } = mongoose;


const keywordsSchema = new Schema({

  keyword: String, // keywords pre populated by alvinio
});


const Keywords = mongoose.model('Keywords', keywordsSchema);

module.exports = Keywords;
