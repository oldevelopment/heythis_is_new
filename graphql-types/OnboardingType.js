
const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLBoolean,
  // GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');


const OnboardingType = new GraphQLObjectType({
  name: 'Onboarding',
  description: 'this should be instructions for the front end to store Onboarding',
  fields: () => ({
    finishmessage: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },

  })
});


module.exports = OnboardingType;
