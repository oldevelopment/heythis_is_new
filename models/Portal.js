/* since this uses items from user.js please note users will be required here and string
interpolation used to fill in the instances
e.g.  */
// const user = require('./User');
const mongoose = require('mongoose');

const { Schema } = mongoose;


const portalSchema = new Schema({
  id: String,
  settings: {
    criteria_main: String,
    criteria_sub: String,
    title: String,
    custompage: String, // this is a keyword
    minMembers: Number, // min members for portal to exist
    maxMembers: Number, // max members for portal
    ambassadors: [String], // userids
    layout: [String],
    colors: [String],
    fonts: [String],
    post: [String],
    grid: String,
  },
  layout: {
    description: String,
    colors: String,
    fonts: String,
    post: String,
    grid: String,
    sidepanel: String,
  },
  community: {
    ambassadors: String, // why is this here ?
    members: String, // members as ambassador, user_id
    members_allowed: String, // members to join portal
  },
  pages: {
    allcontent: Boolean,
    custom: Boolean,
    home: {
      title: String,
      description: String,
      howToconnect: String,
      backgroundImage: String
    },
    ambassadors: {
      id: String,
      title: String,
      description: String,
      backgroundImage: String,
      hide_show: Boolean,
    },
    persons: {
      title: String,
      description: String,
      backgroundImage: String,
      hide_show: Boolean,
    },
    places: {
      title: String,
      description: String,
      backgroundImage: String,
      hide_show: Boolean,
    },
    videos: {
      title: String,
      description: String,
      backgroundImage: String,
      hide_show: Boolean,
    },
    updates: {
      title: String,
      description: String,
      backgroundImage: String,
      hide_show: Boolean,
    },
    onboarding: {
      title: String,
      description: String,
      finishmessage: String,
    },
  },
  footer: {
    firstname: String,
    address: String, // store company name address city  country
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
  typeof2: String,
  ambassadors: {
    id: String,
    firstname: String,
    lastname: String,
  }


});


const Portal = mongoose.model('Portal', portalSchema);

module.exports = Portal;
