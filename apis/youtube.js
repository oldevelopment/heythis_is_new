const uploadsId = 'UUjz3P96KY4AqC8z3gKAledg'; // this is for questonemc youtube page

const getVideos = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${uploadsId}&key=process.env.GOOGLE_YOUTUBE_API_KEY HTTP/1.1`;

/* TODO create extra field for each user
the uploadsId for each user should be stored in thier profile */

module.exports = getVideos;