
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  //   GraphQLBoolean,
  GraphQLObjectType,
} = require('graphql');

const contentDetailsType = new GraphQLObjectType({
  name: 'contentDetailsType',
  description: 'This represents the Youtube token you get from a user logging in to a social media',
  fields: () => ({
    id: { type: GraphQLString },
    videoId: { type: GraphQLString },
    videoPublishedAt: { type: GraphQLString }
  })
});

module.exports = contentDetailsType;
