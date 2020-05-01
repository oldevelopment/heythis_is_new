const {
  //   GraphQLID,
  GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  //  GraphQLObjectType,
  GraphQLInputObjectType
} = require('graphql');


const InputAmbassadorType = new GraphQLInputObjectType({
  name: 'UserInputAmbassador',
  fields: () => ({
    id: { type: GraphQLInt }, // this should be id of ambasador
    description: { type: GraphQLString },
    portal: { type: GraphQLString },

  })
});


module.exports = InputAmbassadorType;
