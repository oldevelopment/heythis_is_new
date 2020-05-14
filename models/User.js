const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');
// const portal = require('./Portal');

const { Schema } = mongoose;

const userSchema = new Schema({

  local: {
    username: {
      type: String, unique: true, sparse: true, trim: true, lowercase: true
    },
    password: { type: String },
    created: String // Date
  },
  firstname: String,
  lastname: String,
  creationdate: String,
  name: String,
  gender: String,
  picture: String,
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
  portals: [String],
  keywords: [{ id: String, keyword: String }],
  accountInfo: String,
  accounttype: String,
  accountstatus: Boolean,
  companyname: String,
  address: String,
  pobox: String,
  telephone: String,
  city: String,
  country: String,
  pagetitle: String,
  pitch: String,
  socialmedia: String, // youtube , facebook, instagramportal
  google: String,
  tokens: [],
  // google: {
  //   id: String,
  //   token: String,
  //   refreshToken: String,
  //   username: String,
  //   name: String,
  //   sync: Boolean,
  //   created: Date,
  //   // rawData: Object
  // },
  youtube: {
    id: String,
    name: String,
    type: String, // place, genre,profession etc.
    token: String,
    refreshToken: String,
    username: String,
    sync: Boolean,
    created: Date,
    // rawData: Object
  },
  Instagram: {
    id: String,
    name: String,
    type: String, // place, genre,profession etc.
    username: String,
    token: String,
    sync: Boolean,
    created: Date,
    // rawData: Object
  },
  facebookId: String,
  facebook: {
    id: String,
    name: String,
    type: String, // place, genre,profession etc.
    token: String,
    longLivedToken: String,
    username: String,
    sync: Boolean,
    created: Date,
    // rawData: Object
  },
  oauth: Boolean,
  referral: String,
  ambassadorstatus: Boolean,

  portal: { // why is this portal here ?
    id: String,
    name: String,
    type: String, // place, genre,profession etc.
  },
  fbname: String,
  fbgender: String,
  fbpicture: String,
  fblocation: String

});

/**
 * Password hash middleware.
 */
userSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function gravatar(size) {
  if (!size) {
    size = 200;
  }
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  }
  const md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
