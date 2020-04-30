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
const Colors = require('./Colors');
const Fonts = require('./Fonts');
const Post = require('./Post');


const InfoType = new GraphQLObjectType({
  name: 'Info',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    criteria: { type: GraphQLString },
    title: { type: GraphQLString },
    ambassadors: { type: GraphQLList(AmbassadorType) }, // userids still not working
    layout: { type: GraphQLList(LayoutType) },
    colors: { type: GraphQLList(Colors) },
    fonts: { type: GraphQLList(Fonts) },
    post: { type: GraphQLList(Post) },
    grid: { type: GraphQLString },
    sidepanel: { type: GraphQLString },
  })
});


module.exports = InfoType;
