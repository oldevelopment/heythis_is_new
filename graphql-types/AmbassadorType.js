
const {
  //   GraphQLID,
//   GraphQLInt,
  GraphQLString,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const AmbassadorType = new GraphQLObjectType({
  name: 'Ambassador',
  description: 'this is the id of an user that is an ambassador it also lists what portal this is',
  fields: () => ({
    id: { type: GraphQLString }, // this should be id of ambasador
    description: { type: GraphQLString },
    portal: { type: GraphQLString },

  })
});


module.exports = AmbassadorType;
