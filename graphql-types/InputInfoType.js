const {
  //   GraphQLID,
  GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  //  GraphQLObjectType,
  GraphQLInputObjectType
} = require('graphql');
// const Portal = require('../models/Portal');

const InputAmbassadorType = require('./InputAmbassadorType');
const InputLayoutType = require('./InputLayoutType');
const InputColors = require('./InputColorsType');
const InputFonts = require('./InputFontsType');
const InputPost = require('./InputPostType');


const InputInfoType = new GraphQLInputObjectType({
  name: 'PortalInputInfo',
  fields: () => ({
    id: { type: GraphQLInt },
    // name: { type: GraphQLString },
    criteria: { type: GraphQLString },
    title: { type: GraphQLString },
    ambassadors: { type: InputAmbassadorType }, // userids still not working
    layout: { type: InputLayoutType },
    colors: { type: InputColors },
    fonts: { type: InputFonts },
    post: { type: InputPost },
    grid: { type: GraphQLString },
    sidepanel: { type: GraphQLString },
  })
});


module.exports = InputInfoType;
