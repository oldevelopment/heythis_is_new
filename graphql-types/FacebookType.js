const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');

const FacebookType = new GraphQLObjectType({
  name: 'Facebook',
  description: 'This represents the Facebook token you get from a user logging in to a social media',
  fields: () => ({
    id: { type: GraphQLString },
    token: { type: GraphQLString },
    longFacebook: { type: GraphQLString },
    /* this is a list of all the keywords we have and should eventually be
          populated using alvinios list */
  })
});

module.exports = FacebookType;
