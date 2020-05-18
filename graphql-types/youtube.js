const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');

const youtube = new GraphQLObjectType({
  name: 'youtube',
  description: 'This represents the Youtube  you get from a user logging in to a social media',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString }, // place, genre,profession etc.
    token: { type: GraphQLString },
    refreshToken: { type: GraphQLString },
    username: { type: GraphQLString },
    sync: { type: GraphQLBoolean },
    created: { type: GraphQLString },
    uploadsId: { type: GraphQLString },
    // rawData: { type: GraphQLObjectType }

  })
});

module.exports = youtube;
