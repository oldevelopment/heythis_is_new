// // Graphql set up
// // Is the code below the mongoose schema or do I still have to build a model for this
// const UserModel = mongoose.model('user', {
//     firstname: String,
//     lastname: String,
//     profile: String,
//     social: String,
//   });
//   const UserType = new GraphQLObjectType({
//     name: 'User',
//     description: 'This represents all info we have on a user',
//     fields: () => ({
//       id: { type: GraphQLID },
//       // firstName: { type: GraphQLString, resolve: (user) => user.firstname },
//       // lastName: { type: GraphQLString, resolve: (user) => user.lastname },
//       profile: {
//         firstname: { type: GraphQLString },
//         lastname: { type: GraphQLString },
//         email: { type: GraphQLString },
//         title: { type: GraphQLString },
//         avatar: { type: GraphQLString },
//         backgroundImage: { type: GraphQLString },
//         description: { type: GraphQLString },
//         profession: { type: GraphQLString },
//         genre: { type: GraphQLString },
//         keywords: { type: GraphQLString },
//         address: { type: GraphQLString },
//         city: { type: GraphQLString },
//         extraInfo: { type: GraphQLString },
//         hyperlinks: [GraphQLString],
//         facebookLink: { type: GraphQLString },
//         instagramLink: { type: GraphQLString },
//         youtubeLink: { type: GraphQLString },
//         label: { type: GraphQLString },
//         header: { type: GraphQLString },
//         grid: { type: GraphQLString },
//         post: { type: GraphQLString },
//       },
//       site: { GraphQLString, resolve: (user) => user.site },
//       google: {
//         id: { type: GraphQLString },
//         token: { type: GraphQLString },
//         refreshToken: { type: GraphQLString },
//         username: { type: GraphQLString },
//         name: { type: GraphQLString },
//         sync: GraphQLBoolean,
//         created: Date,
//         rawData: GraphQLObjectType,
//       },
//       facebook: {
//         id: { type: GraphQLString },
//         token: { type: GraphQLString },
//         longLivedToken: { type: GraphQLString },
//         username: { type: GraphQLString },
//         name: { type: GraphQLString },
//         sync: GraphQLBoolean,
//         created: Date,
//         rawData: GraphQLObjectType,
//       },
//       instagram: {
//         id: { type: GraphQLString },
//         token: { type: GraphQLString },
//         username: { type: GraphQLString },
//         name: { type: GraphQLString },
//         sync: GraphQLBoolean,
//         created: Date,
//         rawData: GraphQLObjectType,
//       },
//     }),
//     resolve: (user) => users.find((user) => user.id === user.userId)
//   });
//   // })
//   // });


//   // to do write resolvers for all of querys
//   const RootQueryType = new GraphQLObjectType({
//     name: 'Query',
//     description:
//       'This document represents the user and all the information we have for them',
//     fields: () => ({
//       User:(
//         type : UserType,
//         description: 'single user profile',
//         resolve: (user) => users.find((user) => user.id === user.userId)
//       )

//       id: { type: GraphQLID },
//       firstName: { type: GraphQLString, resolve: (user) => user.firstname },
//       lastName: { type: GraphQLString, resolve: (user) => user.lastname },
//       // profile: {

//       //   title: { type: GraphQLString },
//       //   avatar: { type: GraphQLString },
//       //   backgroundImage: { type: GraphQLString },
//       //   description: { type: GraphQLString },
//       //   profession: { type: GraphQLString },
//       //   genre: { type: GraphQLString },
//       //   keywords: { type: GraphQLString },
//       //   address: { type: GraphQLString },
//       //   city: { type: GraphQLString },
//       //   extraInfo: { type: GraphQLString },
//       //   hyperlinks: [GraphQLString],
//       //   facebookLink: { type: GraphQLString },
//       //   instagramLink: { type: GraphQLString },
//       //   youtubeLink: { type: GraphQLString },
//       //   label: { type: GraphQLString },
//       //   header: { type: GraphQLString },
//       //   grid: { type: GraphQLString },
//       //   post: { type: GraphQLString },
//       // },
//       // site: { GraphQLString, resolve: (user) => user.site },
//       // google: {
//       //   id: { type: GraphQLString },
//       //   token: { type: GraphQLString },
//       //   refreshToken: { type: GraphQLString },
//       //   username: { type: GraphQLString },
//       //   name: { type: GraphQLString },
//       //   sync: GraphQLBoolean,
//       //   created: Date,
//       //   rawData: GraphQLObjectType,
//       // },
//       // facebook: {
//       //   id: { type: GraphQLString },
//       //   token: { type: GraphQLString },
//       //   longLivedToken: { type: GraphQLString },
//       //   username: { type: GraphQLString },
//       //   name: { type: GraphQLString },
//       //   sync: GraphQLBoolean,
//       //   created: Date,
//       //   rawData: GraphQLObjectType,
//       // },
//       // instagram: {
//       //   id: { type: GraphQLString },
//       //   token: { type: GraphQLString },
//       //   username: { type: GraphQLString },
//       //   name: { type: GraphQLString },
//       //   sync: GraphQLBoolean,
//       //   created: Date,
//       //   rawData: GraphQLObjectType,
//       // },
//     }),
//   });

//   // to do write resolvers for all of querys

//   const RootMutationType = new GraphQLObjectType({
//     name: 'Mutation',
//     description:
//     'This document represents the user and all the information we can change from the front end',
//     fields: () => ({
//       // This is not complete each item needs to be able to have a source of info from the db
//       id: { type: GraphQLID },
//       profile: { type: GraphQLObjectType(firstname: { type: GraphQLString },
//                                         lastname: { type: GraphQLString },
//                                         email: { type: GraphQLString },
//                                         title: GraphQLString,
//                                         avatar: GraphQLString,
//                                         backgroundImage: GraphQLString,
//                                         description: GraphQLString,
//                                         profession: GraphQLString,
//                                         genre: GraphQLString,
//                                         keywords: GraphQLString,
//                                         address: GraphQLString,
//                                         city: GraphQLString,
//                                         extraInfo: GraphQLString,
//                                         hyperlinks: [GraphQLString],
//                                         facebookLink: GraphQLString,
//                                         instagramLink: GraphQLString,
//                                         youtubeLink: GraphQLString,
//                                         label: GraphQLString,
//                                         header: GraphQLString,
//                                         grid: GraphQLString,
//                                         post: GraphQLString,)
//       },
//       site: { GraphQLString, resolve: (user) => user.site }, //done
//       google: {
//         id: GraphQLString,
//         token: GraphQLString,
//         refreshToken: GraphQLString,
//         username: GraphQLString,
//         name: GraphQLString,
//         sync: GraphQLBoolean,
//         created: Date,
//         rawData: GraphQLObjectType,
//       },
//       facebook: {
//         id: GraphQLString,
//         token: GraphQLString,
//         longLivedToken: GraphQLString,
//         username: GraphQLString,
//         name: GraphQLString,
//         sync: GraphQLBoolean,
//         created: Date,
//         rawData: Object,
//       },
//       instagram: {
//         id: GraphQLString,
//         token: GraphQLString,
//         username: GraphQLString,
//         name: GraphQLString,
//         sync: GraphQLBoolean,
//         created: Date,
//         rawData: GraphQLObjectType,
//       },
//     }),
//   });


//   // This defines the general types for query and mutation
//   const schema = new GraphQLSchema({
//     query: RootQueryType,
//     mutation: RootMutationType,
//   });

//   app.use(
//     '/graphql',
//     ExpressGraphQL({
//       schema,
//       // rootValue: {
//       //   query: () => {},
//       //   mutation: (args) => {},
//       // },
//       graphiql: true,
//     })
//   );
