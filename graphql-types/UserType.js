const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
const User = require('../models/User');

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents all the info we have on a user',
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    creationdate: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLString },
    title: { type: GraphQLNonNull(GraphQLString) },
    avatar: { type: GraphQLString },
    profilepic: { type: GraphQLString },
    backgroundimage: { type: GraphQLString },
    description: { type: GraphQLString },
    profession: { type: GraphQLString },
    genre: { type: GraphQLString },
    pageRules: { type: GraphQLString },
    pageContent: { type: GraphQLString },
    hyperlinks: { type: GraphQLString }, // fb,youtube,insta
    pageBuilder: { type: GraphQLString },
    portals: { type: GraphQLString },
    keywords: { type: GraphQLString },
    accountInfo: { type: GraphQLString },
    accounttype: { type: GraphQLString },
    accountstatus: { type: GraphQLString },
    companyname: { type: GraphQLString },
    address: { type: GraphQLString },
    pobox: { type: GraphQLString },
    telephone: { type: GraphQLString },
    wachtwoord: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    pagetitle: { type: GraphQLString },
    pitch: { type: GraphQLString },
    socialmedia: { type: GraphQLString },
    // oauth: { type: GraphQLBoolean },
    referral: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve: () => User.users.filter((user) => user.userId === user.id),
    },
  }),
});

module.exports = UserType;
