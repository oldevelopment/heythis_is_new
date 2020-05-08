
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const HomeType = new GraphQLObjectType({
  name: 'Home',
  description: 'this should be instructions for the front end to store Home',
  fields: () => ({
    backgroundImage: { type: GraphQLString },
    title: { type: GraphQLString },
    fonts: { type: GraphQLString },
    description: { type: GraphQLString },
    howtoconnect: { type: GraphQLString },
  })
});


module.exports = HomeType;
