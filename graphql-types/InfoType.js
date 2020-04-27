const {
//   GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
  // const User = require('../models/User');

// const AmbassadorsType = require('./AmbassadorsType');
const AmbassadorsType = new GraphQLObjectType({
  name: 'Ambassadors',
  fields: () => ({
    id: { type: GraphQLString }, // this should be id of ambasador
    description: { type: GraphQLString },
    portal: { type: GraphQLString },
  })

});

const InfoType = new GraphQLObjectType({
  name: 'Info',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    criteria: { type: GraphQLString },
    title: { type: GraphQLString },
    ambassadors: { type: GraphQLList[{ AmbassadorsType }] }, // userids still not working
    layout: { type: GraphQLString },
    colors: { type: GraphQLString },
    fonts: { type: GraphQLString },
    post: { type: GraphQLString },
    grid: { type: GraphQLString },
    sidepanel: { type: GraphQLString },
    // ambassadors: {
    //   id: {
    //     type: new GraphQLList(AmbassadorsType),
    //      eslint-disable-next-line max-len
    //     resolve: () => AmbassadorsType.id.filter((ambassadors) => ambassadors.userId === ambassadors.id),
    //   }
    // },
  })
});


module.exports = InfoType;
