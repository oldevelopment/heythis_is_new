
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const PlacesType = new GraphQLObjectType({
  name: 'Places',
  description: 'this should be instructions for the front end to store Places',
  fields: () => ({
    backgroundImage: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    hide_show: { type: GraphQLBoolean, },
  })
});


module.exports = PlacesType;
