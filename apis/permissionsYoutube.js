// [possibly redundant]
const getYoutubePermissions = `https://accounts.google.com/o/oauth2/v2/auth?
 scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&
 access_type=offline&
 include_granted_scopes=true&
 state=state_parameter_passthrough_value&
 redirect_uri=${process.env.GOOGLE_CALLBACK}
 response_type=code&
 client_id=${process.env.GOOGLE_ID}`;

module.exports = getYoutubePermissions;

// this is how it appears in browser & works
// https://accounts.google.com/o/oauth2/v2/auth?
//  scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&
//  include_granted_scopes=true&
//  state=state_parameter_passthrough_value&
//  redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fgoogle%2Fcallback&
//  response_type=code&
//  client_id=645500673818-kqvbttlde26kbn2afoqbs25rpnl8u4a2.apps.googleusercontent.com

// https://accounts.google.com/o/oauth2/v2/auth?
//  scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&
//  access_type=offline&
//  include_granted_scopes=true&
//  state=state_parameter_passthrough_value&
//  redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fgoogle%2Fcallback&
//  response_type=code&
//  client_id=645500673818-kqvbttlde26kbn2afoqbs25rpnl8u4a2.apps.googleusercontent.com
