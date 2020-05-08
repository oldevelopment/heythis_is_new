
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const FooterType = new GraphQLObjectType({
  name: 'Footer',
  description: 'this should be instructions for the front end to store Footer',
  fields: () => ({
    address: { type: GraphQLString },
    contact: { type: GraphQLString },
    facebook: { type: GraphQLString },
    instagram: { type: GraphQLString },
    youtube: { type: GraphQLString },
    website: { type: GraphQLString },
  })
});


module.exports = FooterType;
