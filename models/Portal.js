/* since this uses items from user.js please note users will be required here and string
interpolation used to fill in the instances
e.g.  */
// const user = require('./User');
const mongoose = require('mongoose');

const { Schema } = mongoose;


const portalSchema = new Schema({

  info: {
    criteria: String,
    title: String,
    ambassadors: [String], // userids
    layout: String,
    colors: String,
    fonts: String,
    post: String,
    grid: String,
    sidepanel: String,
  },
  layout: { firstname: String },
  pages: {
    home: {
      title: String,
      description: String,
      howtoconnect: String
    },
    ambassadors: {
      title: String,
      description: String,
    },
    persons: {
      title: String,
      description: String,
    },
    places: {
      title: String,
      description: String,
    },
    videos: {
      title: String,
      description: String,
    },
    updates: {
      title: String,
      description: String,
    },
    onboarding: {
      title: String,
      description: String,
    },
  },
  footer: {
    firstname: String,
    address: String,
    contact: String,
    facebookLink: String,
    instagramLink: String,
    youtubeLink: String,
    websiteLink: String,
  },
  title: String,
  description: String,
  name: String,
  type: String,
  type2: String,


});


const Portal = mongoose.model('Portal', portalSchema);

module.exports = Portal;
