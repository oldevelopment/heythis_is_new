const {
  //   GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
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
    backgroundImage: { type: GraphQLString },
    hide_show: { type: GraphQLBoolean },

  })
});


module.exports = InputAmbassadorType;

// ambassadors: {
//   id: { type: GraphQLString },
//   title: { type: GraphQLString },
//   description: { type: GraphQLString },
//   backgroundImage: { type: GraphQLString },
//   hide_show: { type: GraphQLBoolean },
// },
