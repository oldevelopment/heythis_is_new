const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  GraphQLList,
  //   GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
//   GraphQLInputObjectType
} = require('graphql');
const FacebookPagesType = require('./FacebookPagesType');
const FacebookPageContentType = require('./FacebookPageContentType');

const FacebookType = new GraphQLObjectType({
  name: 'Facebook',
  description: 'This represents the Facebook token you get from a user logging in to a social media',
  fields: () => ({
    id: { type: GraphQLString },
    token: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString }, // place, genre,profession etc.
    longLivedToken: { type: GraphQLString },
    username: { type: GraphQLString },
    sync: { type: GraphQLBoolean },
    pages: { type: GraphQLList(FacebookPagesType) },
    created: { type: GraphQLString },
    data: { type: GraphQLList(FacebookPageContentType) },

  })
});

module.exports = FacebookType;
