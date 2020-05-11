const {
  //   GraphQLID,
  // GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  //  GraphQLObjectType,
  GraphQLInputObjectType,
  // GraphQLObjectType
} = require('graphql');

// input KeywordInput {
//   keyword: String

// }

// const InputKeywordType = new GraphQLInputObjectType({
//   name: 'InputKeyword',
//   description: 'this is how you update Keyword on user\'s array',
//   fields: () => ({
//     id: { type: GraphQLInt },
//     keyword: { type: GraphQLString },

//   })
// });

const InputKeywordType = new GraphQLInputObjectType({
  name: 'InputKeyword',
  description: 'this is a tag or key word each one represents is search able and if you search it wshould return a list of users that share this keyword',
  fields: () => ({
    id: { type: GraphQLString },
    keyword: { type: GraphQLString },
    /* this is a list of all the keywords we have and should eventually be
    populated using alvinios list */
  })
});


module.exports = InputKeywordType;
