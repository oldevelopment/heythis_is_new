const {
//   GraphQLID,
//   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');

const KeywordType = new GraphQLObjectType({
  name: 'Keyword',
  fields: () => ({
    id: { type: GraphQLString },
    keyword: { type: GraphQLString },
    /* this is a list of all the keywords we have and should eventually be
    populated using alvinios list */
  })
});

module.exports = KeywordType;
