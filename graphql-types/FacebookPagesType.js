const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
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
    category: { type: GraphQLString }


  })
});

module.exports = FacebookPagesType;
