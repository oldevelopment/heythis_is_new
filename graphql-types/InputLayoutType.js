const {
  //   GraphQLID,
  GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  //  GraphQLObjectType,
  GraphQLInputObjectType
} = require('graphql');


const InputLayoutType = new GraphQLInputObjectType({
  name: 'PortalInputLayout',
  fields: () => ({
    id: { type: GraphQLInt }, // this should be id of ambasador
    description: { type: GraphQLString },
    portal: { type: GraphQLString },

  })
});


module.exports = InputLayoutType;
