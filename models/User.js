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
  uploadsId: String,
  googlevideos: [String], // if there is more information you have to create a type for it
  tokens: [{
    kind: String,
    accessToken: String,
    accessTokenExpires: String,
    refreshToken: String,
  }],
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
    uploadsId: String,
    // rawData: Object
  },
  InstagramContent: [String], // if there is more information you have to create a type for it
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
  facebookvideos: [String], // if there is more information you have to create a type for it
  facebook: [{
    id: String,
    birthday: String,
    email: String,
    name: String,
    type: String, // place, genre,profession etc.
    token: String,
    longLivedToken: String,
    username: String,
    sync: Boolean,
    created: Date,
    access_token: String,
    category: String,
    category_list: [Object],
    tasks: [String],
    data: [{
      id: String,
      name: String,
      category: String,
    }],
    pages: [{
      name: String,
      id: String,
      access_token: String,
      category: String,
      tasks: ['ANALYZE', 'ADVERTISE', 'MODERATE', 'CREATE_CONTENT', 'MANAGE']

    }],


    pageContent: {
      birthday: String,
      about: String,
      band_members: String,
      bio: String,
      connected_instagram_account: String,
      contact_address: String,
      cover: String, // object
      current_location: String,
      description: String,
      display_subtext: String,
      emails: String,
      engagement: Object,
      fan_count: String,
      featured_video: String,
      founded: String,
      general_info: String,
      genre: String,
      global_brand_page_name: String,
      global_brand_root_id: String,
      hometown: String,
      instagram_business_account: String,
      is_community_page: Boolean,
      is_owned: Boolean,
      is_published: Boolean,
      is_webhooks_subscribed: Boolean,
      link: String,
      location: String,
      name: String,
      page_token: String,
      username: String,
      personal_info: String,
      personal_interests: String,
      phone: String,
      place_type: String,
      single_line_address: String,
    //   data: [
    //     [Object]
    //   ],
    //   paging: {
    //     cursors: [Object],
    //     next: String
    //   },
    //   videos: { data: [[Object], [Object]], paging: { cursors: [Object] } },
    },


  }
  ],
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
  fblocation: String,
  channelID: String,
  uploadID: String,
  videos: [{
    _id: String,
    kind: String,
    etag: String,
    object_id: String,
    contentDetails: {
      videoId: String,
      videoPublishedAt: String
    }
  }],
  data: {
    _id: String,
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
