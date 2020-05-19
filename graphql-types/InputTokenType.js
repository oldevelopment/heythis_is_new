const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLInputObjectType,
} = require('graphql');

const InputTokenType = new GraphQLInputObjectType({
  name: 'InputTokenType',
  description: 'This represents the token you get from a user logging in to a social media',
  fields: () => ({
    id: { type: GraphQLString },
    token: { type: GraphQLString },
    longtoken: { type: GraphQLString },
    /* this is a list of all the keywords we have and should eventually be
          populated using alvinios list */
  })
});

module.exports = InputTokenType;
