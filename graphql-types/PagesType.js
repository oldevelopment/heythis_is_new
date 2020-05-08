
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
const HomeType = require('./HomeType');


const PagesType = new GraphQLObjectType({
  name: 'Pages',
  description: 'this should be instructions for the front end to store Pages',
  fields: () => ({
    allcontent: { type: GraphQLBoolean },
    custom: { type: GraphQLBoolean },
    home: { type: HomeType },
    ambassadors: {
      id: { type: GraphQLString },
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      backgroundImage: { type: GraphQLString },
      hide_show: { type: GraphQLBoolean },
    },
    persons: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      backgroundImage: { type: GraphQLString },
      hide_show: { type: GraphQLBoolean },
    },
    places: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      backgroundImage: { type: GraphQLString },
      hide_show: { type: GraphQLBoolean },
    },
    videos: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      backgroundImage: { type: GraphQLString },
      hide_show: { type: GraphQLBoolean },
    },
    updates: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      backgroundImage: { type: GraphQLString },
      hide_show: { type: GraphQLBoolean },
    },
    onboarding: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      finishmessage: { type: GraphQLString },
    },
  })
});


module.exports = PagesType;
