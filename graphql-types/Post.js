
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Ask alvino for a description for this field',
  fields: () => ({
    id: { type: GraphQLString }, // this should be id of ambasador
    description: { type: GraphQLString },
    portal: { type: GraphQLString },

  })
});


module.exports = PostType;
