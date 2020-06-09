const {
  //   GraphQLID,
  //   GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  //   GraphQLBoolean,
  GraphQLInputObjectType,
} = require('graphql');


const InputFacebookPagesType = new GraphQLInputObjectType({
  name: 'InputFacebookPagesType',
  description: 'This is updating facebook in db ',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    category: { type: GraphQLString }


  })
});

module.exports = InputFacebookPagesType;
