
const {
  //   GraphQLID,
  //   GraphQLInt,
  // GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
const HomeType = require('./HomeType');
const AmbassadorType = require('./AmbassadorType');
const PersonsType = require('./PersonsType');
const OnboardingType = require('./OnboardingType');
const UpdatesType = require('./UpdatesType');
const VideoType = require('./VideoType');
const PlacesType = require('./PlacesType');


const PagesType = new GraphQLObjectType({
  name: 'Pages',
  description: 'this should be instructions for the front end to store Pages',
  fields: () => ({
    allcontent: { type: GraphQLBoolean },
    custom: { type: GraphQLBoolean },
    home: { type: HomeType },
    ambassadors: { type: GraphQLList(AmbassadorType) },
    persons: { type: GraphQLList(PersonsType) },
    places: {
      type: PlacesType
    },
    videos: {
      type: VideoType
    },
    updates: {
      type: UpdatesType
    },
    onboarding: {
      type: OnboardingType
    },
  })
});


module.exports = PagesType;
