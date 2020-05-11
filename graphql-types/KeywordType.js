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
  description: 'this is a tag or key word each one represents is search able and if you search it wshould return a list of users that share this keyword',
  fields: () => ({
    id: { type: GraphQLString },
    keyword: { type: GraphQLString },
    /* this is a list of all the keywords we have and should eventually be
    populated using alvinios list */
  })
});


module.exports = KeywordType;
