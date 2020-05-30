/* eslint-disable max-len */
// getFacebookPageID: {
//     type: FacebookType,
//     description: 'Gets all the content we want from facebook once a user has granted permissions',
//     args: {
//       id: { type: GraphQLString },
//       accessToken: { type: GraphQLString },
//       facebook: { type: InputFacebookType }
//     },
//     resolve: (parent, args) =>  User.findOneAndUpdate({ _id: args.id },{ pages:  async (err, docs) => {
//       console.log('next step is getcontent');

//       const { accessToken } = docs.tokens.find((item) => item.kind === 'facebook');
//       const userId = docs.facebookId;

//       console.log(userId);
//       const getFBaccounts = `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`;
//       let pages = null;
//       await axios.get(getFBaccounts)
//         .then((response) => {
//           pages = response.data.data;

//           console.log('pages', response.data.data);

//         })
//         .catch((err) => console.log(err));


//       return FacebookType;
//     }
// },
// {new: true}
//     ),
//   },
//   resolve: async (parent, args) => {
//     //get user
//     const user = await User.findById(args.id); //user is mongooose instance
//     const { accessToken } = user.tokens.find((item) => item.kind === 'facebook');
//     const userId = user.facebookId;
//     const getFBaccounts = `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`;

//     //get pages
//     const fbResponse = await axios.get(getFBaccounts);

//     //update user instance
//     user.pages = fbResponse.data.data;
//     await user.save();
//   }
// _____________________________________________________________________________________;

//   original code copy below so you don't have to do a discard if the above does not work

//   getFacebookPageID: {
//     type: FacebookType,
//     description: 'Gets all the content we want from facebook once a user has granted permissions',
//     args: {
//       id: { type: GraphQLString },
//       accessToken: { type: GraphQLString },
//       facebook: { type: InputFacebookType }
//     },
//     resolve: (parent, args) => User.findOne({ _id: args.id }, async (err, docs) => {
//       console.log('next step is getcontent');
//       // const clientId = process.env.FACEBOOK_ID;
//       // const reDirectFBUri = process.env.FACEBOOK_ID_URI;
//       const { accessToken } = docs.tokens.find((item) => item.kind === 'facebook');
//       const userId = docs.facebookId;

//       console.log(userId);
//       const getFBaccounts = `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`;
//       let pages = null;
//       await axios.get(getFBaccounts)
//         .then((response) => {
//           pages = response.data.data;
//           // this above line is all the fb pages user has give us access to
//           console.log('pages', response.data.data);
//           const query = { _id: args.id, };
//           console.log('This should be object id', query);
//           User.updateOne(query, {
//             pages,
//           }, (err, docs) => {
//             console.log('Any errors here are problems with saving!', err, docs);
//           });
//         })
//         .catch((err) => console.log(err));


//       return FacebookType;
//     }
//     ),
//   },

//  resolve: async (parent, args) => {
//   try {
//     // get user
//     const user = await User.findById(args.id); // user is mongooose instance - https://mongoosejs.com/docs/api.html#document_Document-save
//     const { accessToken } = user.tokens.find((item) => item.kind === 'facebook');
//     const userId = user.facebookId;
//     const getFBaccounts = `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`;

//     // get pages
//     const fbResponse = await axios.get(getFBaccounts);

//     // use mongoose prototype method "save" to update the user
//     user.facebookpages = fbResponse.data.data;
//     console.log('this is before save ', user.facebookpages);
//     await user.save();
//     console.log('this is after save ', user.facebookpages);
//   } catch (e) {
//     console.log(e);
//   }
// };


//   User.findOne({ _id: args.id }, async (err, docs) => {
//     // console.log('177', docs);
//     console.log('next step is getchannel');
//     const apiKey = process.env.GOOGLE_YOUTUBE_API_KEY;
//     const { accessToken } = docs.tokens.find((item) => item.kind === 'google');


//     const getChannelID = `https://www.googleapis.com/youtube/v3/channels?part=id&mine=true&key=${apiKey}`;
//     // console.log('ran getChannelID ');
//     let channelID = null;
//     await axios.get(getChannelID, { headers: { Authorization: `Bearer ${accessToken}` } })
//       .then((response) => {
//         channelID = response.data.items[0].id;
//         console.log('channelID', response.data.items[0].id);
//       })
//       .catch((err) => console.log(err));
//     // get uploadID

//     console.log('User.channelID', User.channelID, process.env.GOOGLE_YOUTUBE_API_KEY);
//     // const getUploadsId = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${User.youtubeUploadsID}&key=${process.env.GOOGLE_YOUTUBE_API_KEY}`;

//     const getUploadID = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelID}&key=${process.env.GOOGLE_YOUTUBE_API_KEY}`;
//     let uploadID = null;
//     await axios.get(getUploadID, { headers: { Authorization: `Bearer ${accessToken}` } })
//       .then((response) => {
//         uploadID = response.data.items[0].contentDetails.relatedPlaylists.uploads;
//         console.log('getUploadID', response.data.items[0].contentDetails.relatedPlaylists.uploads);
//       })
//       .catch((err) => console.log(err));

//     // UCjz3P96KY4AqC8z3gKAledg --> a channelID
//     // https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=UUjz3P96KY4AqC8z3gKAledg&key=[YOUR_API_KEY
//     const videoPlaylistURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${uploadID}&key=${process.env.GOOGLE_YOUTUBE_API_KEY}`;
//     // const videoPlaylistURL = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.GOOGLE_YOUTUBE_API_KEY}`
//     let videos = [];
//     await axios.get(videoPlaylistURL, { headers: { Authorization: `Bearer ${accessToken}` } }).then((response) => {
//       console.log('videoPlaylistURL', response.data);
//       videos = response.data.items;
//     })
//       .catch((err) => console.log(err));

//     console.log('videos', videos);

//     const query = { _id: args.id, };
//     console.log('This should be object id', query);
//     const a = User.findByIdAndUpdate(query, {
//       channelID,
//       uploadID,
//       videos: [{ youtubeVideo }],
//     }, (err, docs) => {
//       console.log('Any errors here are problems with saving!', err, docs);
//     });

//     // Above here
//   })
