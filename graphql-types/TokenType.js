const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');

const TokenType = new GraphQLObjectType({
  name: 'Token',
  description: 'This represents the token you get from a user logging in to a social media',
  fields: () => ({
    id: { type: GraphQLString },
    token: { type: GraphQLString },
    longtoken: { type: GraphQLString },
    /* this is a list of all the keywords we have and should eventually be
        populated using alvinios list */
  })
});

module.exports = TokenType;
