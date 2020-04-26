const {
//   GraphQLID,
  GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
  // const User = require('../models/User');

const AmbassadorsType = require('./AmbassadorsType');


const InfoType = new GraphQLObjectType({
  name: 'Info',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    criteria: { type: GraphQLString },
    title: { type: GraphQLString },
    ambassadors: { type: [AmbassadorsType] }, // userids
    layout: { type: GraphQLString },
    colors: { type: GraphQLString },
    fonts: { type: GraphQLString },
    post: { type: GraphQLString },
    grid: { type: GraphQLString },
    sidepanel: { type: GraphQLString }
  })
});

module.exports = InfoType;
