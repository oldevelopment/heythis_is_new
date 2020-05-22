// getFacebookPageContent2: {
// this part below gets actual content of each page
// // const pageId = docs.facebook.pages.id;
// const pageId = '1234';
// // essential bass = '1541131422779396'
// // questonemc = '268538378791'
// const fieldsToGet = `
//   birthday,
//   about,
//   band_members,
//   bio,
//   connected_instagram_account,
//   contact_address,
//   cover,
//   current_location,
//   description,
//   display_subtext,
//   emails,
//   engagement,
//   fan_count,
//   featured_video,
//   founded,
//   general_info,
//   genre,
//   global_brand_page_name,
//   global_brand_root_id,
//   hometown,
//   instagram_business_account,
//   is_community_page,
//   is_owned,
//   is_published,
//   is_webhooks_subscribed,
//   link,
//   location,
//   name,
//   page_token,
//   personal_info,
//   personal_interests,
//   phone,
//   place_type,
//   single_line_address,
//   username,
//   published_posts,
//   videos
//   `;
// const getPageContent = `https://graph.facebook.com/${pageId}?fields=${fieldsToGet}
// &access_token=${accessToken}`;
// let pageContent = null;
// await axios.get(getPageContent)
//   .then((response) => {
//     facebook.pages.pageContent = response.data;
//     // this above line is all the fb pages user has give us access to
//     console.log('facebook', response.data);
//   })
//   .catch((err) => console.log(err));
// pageContent = docs.facebook.pages.id;

// this will open a pop up window so #note front-end
// await axios.get(getPageContent)
//   .then((response) => {
//     pageContent = response.data;
//     console.log('pageContent recieved', response.data);
//   })
//   .catch((err) => console.log(err));
// get accessToken
// const token = new InputTokenType({
//   kind: 'Instagram',
//   accessToken: args.accessToken
// });
// console.log('InputTokens', InputTokenType);
// token.save((err, a) => {
//   if (err) return console.error(err);
//   console.log('after save: ', a);
// });
// console.log(args)
//     type: KeywordType,
//     description: 'Add a  Keyword',
//     args: {
//       keyword: { type: GraphQLString },
//     },
//     resolve: (parent, args) => {
//       const keyword = new Keywords({
//         keyword: args.keyword,
//       });
//       console.log('Keywords', keyword);
//       keyword.save((err, a) => {
//         if (err) return console.error(err);
//         console.log('after save: ', a);
//       });
//       console.log(args);
//       return keyword;
//     },
//   }
