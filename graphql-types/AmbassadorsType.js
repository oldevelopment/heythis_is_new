
const {
  //   GraphQLID,
//   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
// const User = require('../models/User');
// const Portal = require('../models/Portal');


const AmbassadorsType = new GraphQLObjectType({
  name: 'Ambassadors',
  fields: () => ({
    id: { type: GraphQLString }, // this should be id of ambasador
    description: { type: GraphQLString },
    portal: { type: GraphQLString },

  })
});

// const AmbassadorsType = new GraphQLObjectType({
//   name: 'Ambassadors',
//   fields: () => ({
//     id: { type: GraphQLString }, // this should be id of ambasador
//     description: { type: GraphQLString },
//     portal: { type: GraphQLString },
//     users: {
//       type: new GraphQLList(AmbassadorsType),
//        eslint-disable-next-line max-len
//       resolve: () => Portal.ambassadors.filter((ambassador) => ambassador.ambasadorId === ambassador.id),
//     },
//   })

// });

module.exports = AmbassadorsType;
