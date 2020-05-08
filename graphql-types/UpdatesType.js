
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const UpdatesType = new GraphQLObjectType({
  name: 'Updates',
  description: 'this should be instructions for the front end to store Updates',
  fields: () => ({
    backgroundImage: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    hide_show: { type: GraphQLBoolean, },
  })
});


module.exports = UpdatesType;
