const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  GraphQLList,
  //   GraphQLNonNull,
  //   GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');


const FacebookPagesType = new GraphQLObjectType({
  name: 'FacebookPagesType',
  description: 'This facebook page you we are getting content from',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    access_token: { type: GraphQLString },
    category: { type: GraphQLString },
    tasks: { type: GraphQLList(GraphQLString) },

  })
});

module.exports = FacebookPagesType;
