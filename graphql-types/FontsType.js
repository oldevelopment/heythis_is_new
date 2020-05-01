
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const FontsType = new GraphQLObjectType({
  name: 'Fonts',
  fields: () => ({
    id: { type: GraphQLString }, // this should be id of ambasador
    description: { type: GraphQLString },
    portal: { type: GraphQLString },

  })
});


module.exports = FontsType;
