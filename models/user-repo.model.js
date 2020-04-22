// DELETE THIS FILE  ONCE GRAPHQL IS WORKING IT IS OLD DUPLICATE INFO FROM OLD PROJECT

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  local: {
    username: {
      type: String, unique: true, sparse: true, trim: true, lowercase: true
    },
    password: { type: String },
    created: Date
  },
  profile: {
    firstName: String,
    lastName: String,
    creationdate: String,
    email: String,
    title: String,
    avatar: String,
    profilepic: String,
    backgroundImage: String,
    description: String,
    profession: String,
    genre: String,
    pageRules: String,
    pageContent: String,
    hyperlinks: String, // fb,youtube,insta
    pageBuilder: String,
    portals: String,
    keywords: [String],
    accountInfo: String,
    accounttype: String,
    accountstatus: Boolean,
    companyname: String,
    address: String,
    pobox: String,
    telephone: String,
    wachtwoord: String,
    city: String,
    country: String,
    pagetitle: String,
    pitch: String,
    socialmedia: String,
    oauth: Boolean,
    referral: String,
  },
  portal: {
    id: String,
    name: String,
    type: String, // place, genre,profession etc.
  }
});

userSchema.methods.generateHash = generateHash;
userSchema.methods.validPassword = validPassword;

module.exports = mongoose.model('User', userSchema);

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

function validPassword(password) {
  return bcrypt.compareSync(password, this.local.password);
}
