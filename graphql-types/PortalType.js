const {
  GraphQLID,
  // GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
// const User = require('../models/User');
const Portal = require('../models/Portal');
const InfoType = require('./InfoType');
// const LayoutType = require('./LayoutType');


const PortalType = new GraphQLObjectType({
  name: 'Portal',
  description: 'This represents a Portal',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    info: { type: InfoType }, // todo: resolve issues with nested infotypes
    layout: { type: GraphQLString },
    pages: { type: GraphQLString },
    footer: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString }, // place, genre,profession etc.
    type2: { type: GraphQLString }, // place, genre,profession etc.
    portals: {
      type: new GraphQLList(PortalType),
      resolve: () => Portal.portals.filter((portal) => portal.portalId === portal.id),
    },
  }),
});


module.exports = PortalType;
