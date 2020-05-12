const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');

const YoutubeType = new GraphQLObjectType({
  name: 'Youtube',
  description: 'This represents the Youtube token you get from a user logging in to a social media',
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

module.exports = YoutubeType;
