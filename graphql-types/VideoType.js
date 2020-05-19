
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const VideoType = new GraphQLObjectType({
  name: 'Video',
  description: 'this should be instructions for the front end to store Video',
  fields: () => ({
    backgroundImage: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    hide_show: { type: GraphQLBoolean, },
  })
});


module.exports = VideoType;
