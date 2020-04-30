const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const { Schema } = mongoose;

// from app.js
// const i = new User({
//   user: {
//     firstname: args.firstname,
//     lastname: args.lastname,
//     email: args.email
//   }
// });


const userSchema = new Schema({

  local: {
    username: {
      type: String, unique: true, sparse: true, trim: true, lowercase: true
    },
    password: { type: String },
    created: Date
  },

  firstname: String,
  lastname: String,
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
  ambassadorstatus: Boolean,

  portal: {
    id: String,
    name: String,
    type: String, // place, genre,profession etc.
  }

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
