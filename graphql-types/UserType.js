// const mongoose = require('mongoose');
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLBoolean,
} = require('graphql');
const User = require('../models/User');
const TokenType = require('./TokenType');
const Keywords = require('./KeywordType');
const FacebookType = require('./FacebookType');
// const PortalType = require('./PortalType');
const LocalType = require('./LocalType');
const YoutubeType = require('./YoutubeType');
const InstagramType = require('./InstagramType');
const YoutubeVideo = require('./YoutubeVideo');


const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents all the info we have on a user',
  fields: () => ({
    id: { type: GraphQLID },
    local: { type: (LocalType) },
    userrole: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    creationdate: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLString },
    title: { type: GraphQLNonNull(GraphQLString) },
    avatar: { type: GraphQLString },
    profilepic: { type: GraphQLString },
    backgroundimage: { type: GraphQLString },
    description: { type: GraphQLString },
    profession: { type: GraphQLString },
    genre: { type: GraphQLString },
    pageRules: { type: GraphQLString },
    pageContent: { type: GraphQLString },
    hyperlinks: { type: GraphQLString }, // fb,youtube,insta
    pageBuilder: { type: GraphQLString },
    portals: { type: GraphQLList(GraphQLString) },
    keywords: { type: GraphQLList(Keywords) },
    accountInfo: { type: GraphQLString },
    accounttype: { type: GraphQLString },
    accountstatus: { type: GraphQLBoolean },
    companyname: { type: GraphQLString },
    address: { type: GraphQLString },
    pobox: { type: GraphQLString },
    telephone: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    pagetitle: { type: GraphQLString },
    pitch: { type: GraphQLString },
    socialmedia: { type: GraphQLString },
    youtube: { type: (YoutubeType) },
    Instagram: { type: InstagramType },
    facebookId: { type: GraphQLString },
    facebook: { type: GraphQLList(FacebookType) },
    oauth: { type: GraphQLBoolean },
    ambassadorstatus: { type: GraphQLBoolean }, // checks if this user is an ambassador
    referral: { type: GraphQLString },
    tokens: { type: GraphQLList(TokenType) },
    channelID: { type: GraphQLString },
    uploadID: { type: GraphQLString },
    videos: { type: new GraphQLList(YoutubeVideo) },
    // data: { type: new GraphQLList(GraphQLObjectType) },
    users: {
      type: new GraphQLList(UserType),
      resolve: () => User.users.filter((user) => user.userId === user.id),
    },
  }),
});

module.exports = UserType;
