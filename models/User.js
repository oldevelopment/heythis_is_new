const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  emailVerificationToken: String,
  emailVerified: Boolean,

  snapchat: String,
  twitter: String,
  github: String,
  linkedin: String,
  steam: String,
  twitch: String,
  quickbooks: String,
  tokens: Array,

  profile: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    title: String,
    avatar: String,
    backgroundImage: String,
    description: String,
    profession: String,
    genre: String,
    keywords: [String],
    address: String,
    city: String,
    extraInfo: String,
    hyperlinks: [String],
    facebookLink: String,
    instagramLink: String,
    youtubeLink: String,
    label: String,
    header: String,
    grid: String,
    post: String
  },
  site: {
    name: {
      type: String, unique: true, sparse: true, trim: true, lowercase: true
    }
  },
  google: {
    id: String,
    token: String,
    refreshToken: String,
    username: String,
    name: String,
    sync: Boolean,
    created: Date,
    rawData: Object
  },
  facebook: {
    id: String,
    token: String,
    longLivedToken: String,
    username: String,
    name: String,
    sync: Boolean,
    created: Date,
    rawData: Object
  },
  instagram: {
    id: String,
    token: String,
    username: String,
    name: String,
    sync: Boolean,
    created: Date,
    rawData: Object
  }
}, { timestamps: true });

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
