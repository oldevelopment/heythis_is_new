const nconf = require('nconf');
// change to use .env process.env.
const moment = require('moment');

class UserViewModel {
  /**
   * @param {Object} user
   */
  constructor(user) {
    this.username = user.local.username;
    this.profile = user.profile;
    this.cards = UserViewModel.parseCardData(user);
  }

  /**
   * @param {Object} user
   */
  static parseCardData(user) {
    const googleItemUpdateCount = nconf.get('auths:google:itemUpdateCount');
    const instagramItemUpdateCount = nconf.get('auths:instagram:itemUpdateCount');
    const facebookItemUpdateCount = nconf.get('auths:facebook:itemUpdateCount');

    return []
      .concat(parseYoutubeCards(user.google, googleItemUpdateCount),
        parseInstagramCards(user.instagram, instagramItemUpdateCount),
        parseFacebookCards(user.facebook, facebookItemUpdateCount))
      .map((card) =>
        ({
          ...card,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
          avatar: user.profile.avatar,
          site: user.site.name
        }))
      .sort((a, b) => +(a.date < b.date) || +(a.date === b.date) - 1); // sort by date descending
  }
}

module.exports = UserViewModel;

// todo: refactor to separate class
/**
 * @param {Object} googleData
 * @param {number} googleItemUpdateCount
 */
function parseYoutubeCards(googleData, googleItemUpdateCount) {
  if (
    !googleData
    || !googleData.sync
    || !googleData.rawData
    || !googleData.rawData.items
  ) {
    return [];
  }

  return googleData.rawData.items
    .filter((item) => item.status.privacyStatus.toLowerCase() === 'public')
    .slice(0, googleItemUpdateCount)
    .map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      date: moment(item.snippet.publishedAt).toISOString(),
      channel: 'YouTube',
      type: 'Video',
      link: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      metadata: {
        embedded: {
          link: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
          width: 420,
          height: 345
        },
        thumbnails: item.snippet.thumbnails
      }
    }));
}

// todo: refactor to separate class
/**
 * @param {Object} instagramData
 * @param {number} instagramItemUpdateCount
 */
function parseInstagramCards(instagramData, instagramItemUpdateCount) {
  if (
    !instagramData
    || !instagramData.sync
    || !instagramData.rawData
    || !instagramData.rawData.data
  ) {
    return [];
  }

  return instagramData.rawData.data
    .slice(0, instagramItemUpdateCount)
    .map((item) => ({
      id: item.id,
      title: item.caption && item.caption.text,
      description: item.caption && item.caption.text,
      date: moment.unix(item.created_time).toISOString(),
      channel: 'Instagram',
      type: item.type && item.type.charAt(0).toUpperCase() + item.type.slice(1),
      link: item.link,
      metadata: {
        carousel:
          item.carousel_media && Array.isArray(item.carousel_media)
            ? item.carousel_media.map((image) => {
              let url = null;
              if (image.standard_resolution) {
                url = image.standard_resolution.url;
              } else if (image.images && image.images.standard_resolution) {
                url = image.images.standard_resolution.url;
              }
              return { url };
            })
            : null,
        videos: item.videos,
        images: item.images,
        likes: item.likes,
        comments: item.comments,
        filter: item.filter,
        location: item.location,
        tags: item.tags
      }
    }));
}

// todo: refactor to separate class
/**
 * @param {Object} facebookData
 * @param {number} facebookItemUpdateCount
 */
function parseFacebookCards(facebookData, facebookItemUpdateCount) {
  if (
    !facebookData
    || !facebookData.sync
    || !facebookData.rawData
    || !facebookData.rawData.data
  ) {
    return [];
  }

  return facebookData.rawData.data
    .filter((item) => item.privacy && item.privacy.value.toLowerCase() === 'everyone')
    .slice(0, facebookItemUpdateCount)
    .map((item) => ({
      id: item.id,
      title: item.story || item.message,
      description: item.message || item.story,
      date: moment(item.created_time).toISOString(),
      channel: 'Facebook',
      type: item.type && item.type.charAt(0).toUpperCase() + item.type.slice(1),
      link: item.link || item.permalink_url,
      metadata: {
        application: item.application,
        privacy: item.privacy,
        source: item.source,
        from: item.from,
        place: item.place,
        permalinkUrl: item.permalink_url,
        picture: item.picture,
        fullPicture: item.full_picture,
        attachments: item.attachments,
        carousel:
          item.attachments
          && item.attachments.data
          && item.attachments.data[0].subattachments
            ? item.attachments.data[0].subattachments.data.map((image) => {
              let url = null;
              if (image && image.media) {
                url = image.media.image.src;
              }

              return { url };
            })
            : null
      }
    }));
}
