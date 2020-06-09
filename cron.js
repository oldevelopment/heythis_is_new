const { request } = require('graphql-request');
const cron = require('node-cron');
const User = require('./models/User');

/*
TODO
get all users through mongoose
get them into an array
user foreach to iterate over the array updating / syncing content for each user

get an array of all the users
for (var key in obj) {
    console.log(key, obj[key]);
 }
 google mapping objects

 */

// array1.forEach(element => console.log(element));
// mutation{
//     getFacebookPageContent(id:"5ed636f8b123d5536004f3e8",pageName:"essential bass"){
//       id
//     }
//   }
const { id, pageName } = User;
// const { pageName } = facebookpages;

const query = `
mutation getFacebookPageContent{
    (id:${id},pageName:${pageName}){
        console.log('facebook sync done')
    }
}`;
cron.schedule('0 1,13 * * *', () => request('https://your.api.url', query));

const syncContents = () => {
};

module.exports = syncContents;
// this is youtube
// await axios.get(videoPlaylistURL,
// { headers: { Authorization: `Bearer ${accessToken}` } }).then((response) => {
//     console.log('videoPlaylistURL', response.data);
//     videos = response.data.items;
//   })
//     .catch((err) => console.log(err));

//   console.log('videos', videos);
//   user.videos = videos;
//   // console.log('this is before save ', user.instagramContents);
//   await user.save();
//   // console.log('this is after save ', user.instagramContents);
// } catch (e) {
//   console.log(e);
// }


// this is facebook
// {
//     console.log('next step is getcontent');
//     const user = await User.findById(args.id);
//     const { pageName } = args;
//     // eslint-disable-next-line camelcase
// eslint-disable-next-line max-len
//     const { access_token } = user.facebookpages.find((item) => (item) => item === `${pageName}`);
//     const { id } = user.facebookpages.find((item) => (item) => item === `${pageName}`);
//     console.log(pageName, access_token, id);
// eslint-disable-next-line max-len
//     const fieldsToGet = 'birthday,about,band_members,bio,connected_instagram_account,contact_address,cover,current_location,description,display_subtext,emails,engagement,fan_count,featured_video,founded,general_info,genre,global_brand_page_name,global_brand_root_id,hometown,instagram_business_account,is_community_page,is_owned,is_published,is_webhooks_subscribed,link,location,name,page_token,personal_info,personal_interests,phone,place_type,single_line_address,username,published_posts,videos';
//     // eslint-disable-next-line camelcase
//     const getAccountContents = `https://graph.facebook.com/${id}?fields=${fieldsToGet}&access_token=${access_token}`;
//     const fbpageContent = await axios.get(getAccountContents);

//     user.facebookPageContents = fbpageContent.data;

//     await user.save();
//   } catch (e) {
//     console.log(e);
//   }

// this is instagram
// {
//     console.log('next step is getcontent');
//     const user = await User.findById(args.id);
//     const { pageName } = args;
//     // eslint-disable-next-line camelcase
//     const { access_token } = user.tokens.find((item) => (item) => item === 'instagram');
//     const { id } = user.facebookpages.find((item) => (item) => item === `${pageName}`);
//     console.log(pageName, access_token, id);
// eslint-disable-next-line max-len
//     const fieldsToGet = 'id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp,username,children';

//     // eslint-disable-next-line camelcase
//     const getAccountContents = `https://graph.instagram.com/me/media?fields=${fieldsToGet}&access_token=${access_token}`;
//     //         `https://graph.instagram.com/{media-id}?fields=${fieldsToGet}&access_token=${access_token}`;
//     // `https://graph.instagram.com/me/media?fields=${fieldsToGet}&access_token=${access_token}`
//     const instaPageContent = await axios.get(getAccountContents);

//     user.instagramContents = instaPageContent.data;
//     // console.log('this is before save ', user.instagramContents);
//     await user.save();
//     // console.log('this is after save ', user.instagramContents);
//   } catch (e) {
//     console.log(e);
//   }
