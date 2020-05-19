const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');

const LocalType = new GraphQLObjectType({
  name: 'Local',
  description: 'This represents the Local you get from a user logging in to a social media',
  fields: () => ({
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    created: { type: GraphQLString },
    /* this is a list of all the keywords we have and should eventually be
          populated using alvinios list */
  })
});

module.exports = LocalType;
