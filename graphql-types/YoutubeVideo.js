const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  //   GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');
const contentDetailsType = require('./contentDetailsType');

const youtubeVideo = new GraphQLObjectType({
  name: 'youtubeVideo',
  description: 'This represents the Youtube token you get from a user logging in to a social media',
  fields: () => ({
    object_id: { type: GraphQLString },
    kind: { type: GraphQLString },
    etag: { type: GraphQLString },
    contentDetails: { type: contentDetailsType }

  })
});

module.exports = youtubeVideo;
