const {
  //   GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  //   GraphQLList,
  //   GraphQLNonNull,
  GraphQLObjectType,
//   GraphQLInputObjectType
} = require('graphql');


const FacebookPageContentType = new GraphQLObjectType({
  name: 'FacebookPageContent',
  description: 'this is the contents of the facebook page to be displayed in front end',
  fields: () => ({
    id: { type: GraphQLInt },
    description: { type: GraphQLString },
    birthday: { type: GraphQLString },
    about: { type: GraphQLString },
    band_members: { type: GraphQLString },
    bio: { type: GraphQLString },
    connected_instagram_account: { type: GraphQLString },
    contact_address: { type: GraphQLString },
    cover: { type: GraphQLString }, // object
    current_location: { type: GraphQLString },
    display_subtext: { type: GraphQLString },
    emails: { type: GraphQLString },
    engagement: { type: GraphQLString }, // object
    fan_count: { type: GraphQLString },
    featured_video: { type: GraphQLString },
    founded: { type: GraphQLString },
    general_info: { type: GraphQLString },
    genre: { type: GraphQLString },
    global_brand_page_name: { type: GraphQLString },
    global_brand_root_id: { type: GraphQLString },
    hometown: { type: GraphQLString },
    instagram_business_account: { type: GraphQLString },
    is_community_page: { type: GraphQLBoolean },
    is_owned: { type: GraphQLBoolean },
    is_published: { type: GraphQLBoolean },
    is_webhooks_subscribed: { type: GraphQLBoolean },
    link: { type: GraphQLString },
    location: { type: GraphQLString },
    name: { type: GraphQLString },
    page_token: { type: GraphQLString },
    personal_info: { type: GraphQLString },
    personal_interests: { type: GraphQLString },
    phone: { type: GraphQLString },
    place_type: { type: GraphQLString },
    single_line_address: { type: GraphQLString },
    username: { type: GraphQLString },
    published_posts: { type: GraphQLString },
    // data: { type: GraphQLList(GraphQLObjectType) },
    // paging: {
    //   cursors: { type: GraphQLList(GraphQLObjectType) },
    //   next: String
    // },
    // videos: {
    //   data: { type: GraphQLList(GraphQLObjectType) },
    //   paging: { cursors: { type: GraphQLList(GraphQLObjectType) }, }
    // },


  })
});


module.exports = FacebookPageContentType;
