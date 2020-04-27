
const {
  //   GraphQLID,
//   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
// const User = require('../models/User');


const AmbassadorsType = new GraphQLObjectType({
  name: 'Ambassadors',
  fields: () => ({
    id: { type: GraphQLString }, // this should be id of ambasador
    description: { type: GraphQLString },
    portal: { type: GraphQLString },

  })
});

module.exports = AmbassadorsType;
