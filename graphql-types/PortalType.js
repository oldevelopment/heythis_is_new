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
const SettingsType = require('./SettingsType');
const AmbassadorType = require('./AmbassadorType');
const PagesType = require('./PagesType');
const FooterType = require('./FooterType');
// const LayoutType = require('./LayoutType');


const PortalType = new GraphQLObjectType({
  name: 'Portal',
  description: 'This represents a Portal and everything about it complete',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    settings: { type: SettingsType }, // todo: resolve issues with nested settingstypes
    layout: { type: GraphQLString },
    members: { type: GraphQLString },
    // this should be a list of all the id's of users in the portal
    pages: { type: PagesType },
    footer: { type: FooterType },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString }, // place, genre,profession etc.
    type2: { type: GraphQLString }, // place, genre,profession etc.
    ambassadors: { type: GraphQLList[AmbassadorType] },
    portals: {
      type: new GraphQLList(PortalType),
      resolve: () => Portal.portals.filter((portal) => portal.portalId === portal.id),
    },
  }),
});


module.exports = PortalType;
