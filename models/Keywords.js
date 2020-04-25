
const mongoose = require('mongoose');

const { Schema } = mongoose;


const keywordsSchema = new Schema({
  keywords: [String], // keywords pre populated by alvinio
});


const Keywords = mongoose.model('Keywords', keywordsSchema);

module.exports = Keywords;
