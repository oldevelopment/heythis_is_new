/* since this uses items from user.js please note users will be required here and string
interpolation used to fill in the instances
e.g.  */
// const user = require('./User');
const mongoose = require('mongoose');

const { Schema } = mongoose;


const portalSchema = new Schema({

  info: {
    criteria: String,
    title: String,
    ambassadors: [String], // userids
    layout: String,
    colors: String,
    fonts: String,
    post: String,
    grid: String,
    sidepanel: String,
  },
  layout: { firstname: String },
  pages: {
    home: {
      title: String,
      description: String,
      howtoconnect: String
    },
    ambassadors: {
      title: String,
      description: String,
    },
    persons: {
      title: String,
      description: String,
    },
    places: {
      title: String,
      description: String,
    },
    videos: {
      title: String,
      description: String,
    },
    updates: {
      title: String,
      description: String,
    },
    onboarding: {
      title: String,
      description: String,
    },
  },
  footer: {
    firstname: String,
    address: String,
    contact: String,
    facebookLink: String,
    instagramLink: String,
    youtubeLink: String,
    websiteLink: String,
  },
  title: String,
  description: String,
  name: String,
  type: String,
  type2: String,


});


const Portal = mongoose.model('Portal', portalSchema);

module.exports = Portal;

//  nested schema guide for graphql
// `const MovieType = new GraphQLObjectType({
//   name: 'Movie',
//   fields: () => ({
//     id: { type: GraphQLString },
//     adult: { type: GraphQLBoolean },
//     backdrop_path: { type: GraphQLString },
//     belongs_to_collection: { type: BelongsToCollection },
//     budget: { type: GraphQLInt },
//     overview: { type: GraphQLString },
//     popularity: { type: GraphQLInt },
//     poster_path: { type: GraphQLString },
//     production_companies: {
//       type: new GraphQLList(CompaniesType)
//     },
//     genres: {
//       type: new GraphQLList(GenreType)
//     },
//     release_date: { type: GraphQLString },
//     tagline: { type: GraphQLString },
//     title: { type: GraphQLString },
//     vote_average: { type: GraphQLInt },
//     vote_count: { type: GraphQLInt }
//   })
// });

// const CompaniesType = new GraphQLObjectType({
//   name: 'ProductionCompanies',
//   fields: {
//     id: { type: GraphQLInt },
//     name: { type: GraphQLString },
//     logo_path: { type: GraphQLString },
//     original_country: { type: GraphQLString }
//   }
// });

// const GenreType = new GraphQLObjectType({
//   name: 'Genre',
//   fields: () => ({
//     id: { type: GraphQLInt },
//     name: { type: GraphQLString }
//   })
// })

// const BelongsToCollection = new GraphQLObjectType({
//   name: 'BelongsToCollection',
//   fields: () => ({
//     id: { type: GraphQLInt },
//     name: { type:  GraphQLString },
//     poster_path: { type: GraphQLString },
//     backdrop_path: { type: GraphQLString  }
//   })
// });
