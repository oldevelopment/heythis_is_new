
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const LayoutType = new GraphQLObjectType({
  name: 'Layout',
  description: 'this should be instructions for the front end to store layout',
  fields: () => ({
    description: { type: GraphQLString },
    colors: { type: GraphQLString },
    fonts: { type: GraphQLString },
    post: { type: GraphQLString },
    grid: { type: GraphQLString },
    sidepanel: { type: GraphQLString },
  })
});


module.exports = LayoutType;
