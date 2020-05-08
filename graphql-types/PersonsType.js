
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const PersonsType = new GraphQLObjectType({
  name: 'Persons',
  description: 'this should be instructions for the front end to store Persons',
  fields: () => ({
    backgroundImage: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    hide_show: { type: GraphQLBoolean, },
  })
});


module.exports = PersonsType;
