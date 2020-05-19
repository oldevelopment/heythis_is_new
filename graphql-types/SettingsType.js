const {
//   GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
// const Portal = require('../models/Portal');

const AmbassadorType = require('./AmbassadorType');
const LayoutType = require('./LayoutType');
const Colors = require('./ColorsType');
const Fonts = require('./FontsType');
const Post = require('./Post');


const SettingsType = new GraphQLObjectType({
  name: 'Settings',
  description: 'this the info type on a portal',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    criteria_main: { type: GraphQLString },
    criteria_sub: { type: GraphQLString },
    custompage: { type: GraphQLString }, // this is a keyword
    minMembers: { type: GraphQLInt }, // min members for portal to exist
    maxMembers: { type: GraphQLInt }, // max members for portal
    title: { type: GraphQLString },
    ambassadors: { type: GraphQLList(AmbassadorType) }, // userids still not working
    layout: { type: GraphQLList(LayoutType) },
    colors: { type: GraphQLList(Colors) },
    fonts: { type: GraphQLList(Fonts) },
    post: { type: GraphQLList(Post) },
    grid: { type: GraphQLString },
  })
});


module.exports = SettingsType;
