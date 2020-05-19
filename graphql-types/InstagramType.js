const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');

const InstagramType = new GraphQLObjectType({
  name: 'Instagram',
  description: 'This represents the Instagram token you get from a user logging in to a social media',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString }, // place, genre,profession etc.
    token: { type: GraphQLString },
    refreshToken: { type: GraphQLString },
    username: { type: GraphQLString },
    sync: { type: GraphQLBoolean },
    created: { type: GraphQLString },
    // rawData: { type: GraphQLObjectType }

  })
});

module.exports = InstagramType;
