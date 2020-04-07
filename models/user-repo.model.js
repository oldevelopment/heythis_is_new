// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt-nodejs');

// const userSchema = mongoose.Schema({
//   local: {
//     username: {
//       type: String, unique: true, sparse: true, trim: true, lowercase: true
//     },
//     password: { type: String },
//     created: Date
//   },
//   profile: {
//     firstName: { type: String },
//     lastName: { type: String },
//     email: { type: String },
//     title: String,
//     avatar: String,
//     backgroundImage: String,
//     description: String,
//     profession: String,
//     genre: String,
//     keywords: [String],
//     address: String,
//     city: String,
//     extraInfo: String,
//     hyperlinks: [String],
//     facebookLink: String,
//     instagramLink: String,
//     youtubeLink: String,
//     label: String,
//     header: String,
//     grid: String,
//     post: String
//   },
//   site: {
//     name: {
//       type: String, unique: true, sparse: true, trim: true, lowercase: true
//     }
//   },
//   google: {
//     id: String,
//     token: String,
//     refreshToken: String,
//     username: String,
//     name: String,
//     sync: Boolean,
//     created: Date,
//     rawData: Object
//   },
//   facebook: {
//     id: String,
//     token: String,
//     longLivedToken: String,
//     username: String,
//     name: String,
//     sync: Boolean,
//     created: Date,
//     rawData: Object
//   },
//   instagram: {
//     id: String,
//     token: String,
//     username: String,
//     name: String,
//     sync: Boolean,
//     created: Date,
//     rawData: Object
//   }
// });

// userSchema.methods.generateHash = generateHash;
// userSchema.methods.validPassword = validPassword;

// module.exports = mongoose.model('User', userSchema);

// function generateHash(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// }

// function validPassword(password) {
//   return bcrypt.compareSync(password, this.local.password);
// }
