const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLBoolean,
  // GraphQLObjectType,
  GraphQLInputObjectType
} = require('graphql');
const InputFacebookPagesType = require('./InputFacebookPagesType');

const InputFacebookType = new GraphQLInputObjectType({
  name: 'InputFacebook',
  description: 'This represents the Facebook token you get from a user logging in to a social media',
  fields: () => ({
    id: { type: GraphQLString },
    token: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString }, // place, genre,profession etc.
    longLivedToken: { type: GraphQLString },
    username: { type: GraphQLString },
    sync: { type: GraphQLBoolean },
    pages: { type: InputFacebookPagesType },
    created: { type: GraphQLString },
    // data: { type: GraphQLList(InputFacebookPagesType) },

    /* this is a list of all the keywords we have and should eventually be
          populated using alvinios list */
  })
});

module.exports = InputFacebookType;
