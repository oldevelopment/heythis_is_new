const {
  //   GraphQLID,
  GraphQLInt,
  GraphQLString,
  //   GraphQLList,
  //   GraphQLNonNull,
  //  GraphQLObjectType,
  GraphQLInputObjectType
} = require('graphql');


const FacebookPageContentType = new GraphQLInputObjectType({
  name: 'FacebookPageContent',
  description: 'this is the contents of the facebook page to be displayed in front end',
  fields: () => ({
    id: { type: GraphQLInt }, // this should be id of ambasador
    description: { type: GraphQLString },
    birthday: { type: GraphQLString },
    about: { type: GraphQLString },
    band_members: { type: GraphQLString },
    bio: { type: GraphQLString },
    connected_instagram_account: { type: GraphQLString },
    contact_address: { type: GraphQLString },
    cover: { type: GraphQLString },
    current_location: { type: GraphQLString },
    display_subtext: { type: GraphQLString },
    emails: { type: GraphQLString },
    engagement: { type: GraphQLString },
    fan_count: { type: GraphQLString },
    featured_video: { type: GraphQLString },
    founded: { type: GraphQLString },
    general_info: { type: GraphQLString },
    genre: { type: GraphQLString },
    global_brand_page_name: { type: GraphQLString },
    global_brand_root_id: { type: GraphQLString },
    hometown: { type: GraphQLString },
    instagram_business_account: { type: GraphQLString },
    is_community_page: { type: GraphQLString },
    is_owned: { type: GraphQLString },
    is_published: { type: GraphQLString },
    is_webhooks_subscribed: { type: GraphQLString },
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
    videos: { type: GraphQLString }

  })
});


module.exports = FacebookPageContentType;
