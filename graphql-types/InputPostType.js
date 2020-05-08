const {
  //   GraphQLID,
  GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  //  GraphQLObjectType,
  GraphQLInputObjectType
} = require('graphql');


const InputPostType = new GraphQLInputObjectType({
  name: 'PortalInputPost',
  description: 'this is how you update post on portal',
  fields: () => ({
    id: { type: GraphQLInt }, // this should be id of ambasador
    description: { type: GraphQLString },
    portal: { type: GraphQLString },

  })
});


module.exports = InputPostType;
