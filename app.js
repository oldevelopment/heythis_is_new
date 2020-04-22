/* eslint-disable no-unused-vars */
/* eslint-disable function-paren-newline */
/**
 * Module dependencies.
 */
const express = require('express');
const ExpressGraphQL = require('express-graphql');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const multer = require('multer');

const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLSchema,
} = require('graphql');

const upload = multer({ dest: path.join(__dirname, 'uploads') });

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env.example' });
// load mongoose model
const User = require('./models/User');
/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');
const userController = require('./controllers/user');
const apiController = require('./controllers/api');
const contactController = require('./controllers/contact');

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log(
    '%s MongoDB connection error. Please make sure MongoDB is running.',
    chalk.red('✗')
  );
  process.exit();
});
// data example to work swap me for db connection please
// const db = require('./data');
// const users = mongodb;
// data

const portals = [
  { id: 1, name: 'Harry potter and the Chamber of Secrets', authorId: 1 },
  { id: 2, name: 'Harry potter and the Prisoner of Azkaban', authorId: 1 },
  { id: 3, name: 'Harry potter and the Goblet of Fire', authorId: 1 },
  { id: 4, name: 'The Fellowship of the ring', authorId: 2 },
  { id: 5, name: 'The Two Towers', authorId: 2 },
  { id: 6, name: 'The Return of the King', authorId: 2 },
  { id: 7, name: 'The Way of the Shadows', authorId: 3 },
  { id: 8, name: 'The Beyond the Shadows', authorId: 3 },
];
const users = [
  {
    id: 1,
    accountInfo: 'to be an object later',
    userInfo: 'to be an object later',
    pageRules: 'to be an object later',
    pageContent: 'to be an object later',
    hyperlinks: 'to be an object later',
    pageBuilder: 'to be an object later',
    portals: 'to be an object later',
    socialmedia: 'to be an object later',
  },
  {
    id: 2,
    accountInfo: 'to be an object later',
    userInfo: 'to be an object later',
    pageRules: 'to be an object later',
    pageContent: 'to be an object later',
    hyperlinks: 'to be an object later',
    pageBuilder: 'to be an object later',
    portals: 'to be an object later',
    socialmedia: 'to be an object later',
  },
  {
    id: 3,
    accountInfo: 'to be an object later',
    userInfo: 'to be an object later',
    pageRules: 'to be an object later',
    pageContent: 'to be an object later',
    hyperlinks: 'to be an object later',
    pageBuilder: 'to be an object later',
    portals: 'to be an object later',
    socialmedia: 'to be an object later',
  },
  {
    id: 4,
    accountInfo: 'to be an object later',
    userInfo: 'to be an object later',
    pageRules: 'to be an object later',
    pageContent: 'to be an object later',
    hyperlinks: 'to be an object later',
    pageBuilder: 'to be an object later',
    portals: 'to be an object later',
    socialmedia: 'to be an object later',
  },
  {
    id: 5,
    accountInfo: 'to be an object later',
    userInfo: 'to be an object later',
    pageRules: 'to be an object later',
    pageContent: 'to be an object later',
    hyperlinks: 'to be an object later',
    pageBuilder: 'to be an object later',
    portals: 'to be an object later',
    socialmedia: 'to be an object later',
  },
  {
    id: 6,
    accountInfo: 'to be an object later',
    userInfo: 'to be an object later',
    pageRules: 'to be an object later',
    pageContent: 'to be an object later',
    hyperlinks: 'to be an object later',
    pageBuilder: 'to be an object later',
    portals: 'to be an object later',
    socialmedia: 'to be an object later',
  },
];
const userinfotype = [
  {
    id: 1,
    companyname: 'proactief',
    firstname: 'stefan',
    lastname: 'quest',
    address: '525 timbukturoad',
    pobox: '1304 asialand',
    city: 'Honkercity',
    country: 'China',
    telephone: '0123456789',
    email: 'stefan@test.com',
    ww: 'stefanquest.com',
    oauth: true,
    referral: false,
  },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents all the info we have on a user',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    firstname: { type: GraphQLNonNull(GraphQLString) },
    lastname: { type: GraphQLNonNull(GraphQLString) },
    creationdate: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
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
    keywords: { type: GraphQLNonNull(GraphQLString) },
    accountInfo: { type: GraphQLNonNull(GraphQLString) },
    accounttype: { type: GraphQLNonNull(GraphQLString) },
    accountstatus: { type: GraphQLNonNull(GraphQLBoolean) },
    companyname: { type: GraphQLString },
    address: { type: GraphQLString },
    pobox: { type: GraphQLString },
    telephone: { type: GraphQLString },
    wachtwoord: { type: GraphQLNonNull(GraphQLString) },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    pagetitle: { type: GraphQLString },
    pitch: { type: GraphQLString },
    socialmedia: { type: GraphQLNonNull(GraphQLString) },
    oauth: { type: GraphQLBoolean },
    referral: { type: GraphQLNonNull(GraphQLString) },
    users: {
      type: new GraphQLList(UserType),
      resolve: (user) => users.filter((user) => user.userId === user.id),
    },
  }),
});
const PortalType = new GraphQLObjectType({
  name: 'Portal',
  description: 'This represents a Portal',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    type: { type: GraphQLNonNull(GraphQLString) }, // place, genre,profession etc.
    users: {
      type: new GraphQLList(UserType),
      resolve: (user) => users.filter((user) => user.userId === user.id),
    },
  }),
});

// instead of the single schema above we now use a RootQuerytype
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    portal: {
      type: PortalType,
      description: 'A single portal',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => portals.find((portal) => portal.id === args.id),
    },
    portals: {
      type: new GraphQLList(PortalType),
      description: 'List of all portals',
      resolve: () => portals,
    },
    users: {
      type: new GraphQLList(UserType),
      description: 'List of all user',
      resolve: () => users,
    },
    user: {
      type: UserType,
      description: 'A single user',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => users.find((user) => user.id === args.id),
    },
  }),
});
const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addUser: {
      type: UserType,
      description: 'Add a  User',
      args: {
        firstname: { type: GraphQLNonNull(GraphQLString) },
        lasttname: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        wachtwoord: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const user = { id: users.length + 1, name: args.name };
        users.push(user);
        return user;
      },
    },
    updateUser: {
      type: UserType,
      description: 'Update a  User',
      args: {
        wachtwoord: { type: GraphQLString },
        companyname: { type: GraphQLString },
        address: { type: GraphQLString },
        pobox: { type: GraphQLString },
        city: { type: GraphQLString },
        country: { type: GraphQLString },
        telephone: { type: GraphQLString },
        ww: { type: GraphQLString },
        accountstatus: { type: GraphQLString },
        profilepic: { type: GraphQLString },
        pagetitle: { type: GraphQLString },
        pitch: { type: GraphQLString },
        backgroundimage: { type: GraphQLString },
        keywords: { type: GraphQLString },
        profession: { type: GraphQLString },
        genre: { type: GraphQLString },
        pageRules: { type: GraphQLString },
        pageContent: { type: GraphQLString },
        hyperlinks: { type: GraphQLString }, // fb,youtube,insta
        pageBuilder: { type: GraphQLString },
        portals: { type: GraphQLString },
        socialmedia: { type: GraphQLString },
        oauth: { type: GraphQLNonNull(GraphQLBoolean) },
        referral: { type: GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: (parent, args) => {
        const user = {
          /* this method is not correct it's just a filler
          correct method should find the user and replace the
          details with those of args */
          id: users.length + 1,
          firstname: args.firstname,
          lastname: args.lastname,
          email: args.email,
          wachtwoord: args.wachtwoord,
          companyname: args.companyname,
          profilepic: args.profilepic,
          address: args.address,
          pobox: args.pobox,
          city: args.city,
          country: args.country,
          telephone: args.country,
          ww: args.ww, // sites
          pagetitle: args.pagetitle,
          pitch: args.pitch,
          backgroundimage: args.backgroundimage,
          keywords: args.keywords,
          profession: args.profession,
          genre: args.genre,
          pageRules: args.pageRules,
          pageContent: args.pageContent,
          hyperlinks: args.hyperlinks, // fb,youtube,insta
          pageBuilder: args.pageBuilder,
          portals: args.portals,
          socialmedia: args.socialmedia,
          oauth: args.oauth,
          referral: { type: args.referral },
        };
        users.push(user);
        return user;
      },
    },
    createPortal: {
      type: PortalType,
      description: 'Add a  portal',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },

      },
      resolve: (parent, args) => {
        const portal = {
          id: portals.length + 1,
          name: args.name,
          authorId: args.authorId,
        };
        portals.push(portal);
        return portal;
      },
    },
  }),

});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
app.use(
  '/graphql',
  ExpressGraphQL({
    schema,
    graphiql: true,
  })
);

// ----------------------Express config to be adjusted after graphql works------------------------//

/**
 * Express configuration.
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(
  sass({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
  })
);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
    store: new MongoStore({
      url: process.env.MONGODB_URI,
      autoReconnect: true,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  if (req.path === '/api/upload') {
    // Multer multipart/form-data handling needs to occur before the Lusca CSRF check.
    next();
  } else {
    lusca.csrf()(req, res, next);
  }
});
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  // After successful login, redirect back to the intended page
  if (
    !req.user
    && req.path !== '/login'
    && req.path !== '/signup'
    && !req.path.match(/^\/auth/)
    && !req.path.match(/\./)
  ) {
    req.session.returnTo = req.originalUrl;
  } else if (
    req.user
    && (req.path === '/account' || req.path.match(/^\/api/))
  ) {
    req.session.returnTo = req.originalUrl;
  }
  next();
});
app.use(
  '/',
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);
app.use(
  '/js/lib',
  express.static(path.join(__dirname, 'node_modules/chart.js/dist'), {
    maxAge: 31557600000,
  })
);
app.use(
  '/js/lib',
  express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd'), {
    maxAge: 31557600000,
  })
);
app.use(
  '/js/lib',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'), {
    maxAge: 31557600000,
  })
);
app.use(
  '/js/lib',
  express.static(path.join(__dirname, 'node_modules/jquery/dist'), {
    maxAge: 31557600000,
  })
);
app.use(
  '/webfonts',
  express.static(
    path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'),
    { maxAge: 31557600000 }
  )
);

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/forgot', userController.getForgot);
app.post('/forgot', userController.postForgot);
app.get('/reset/:token', userController.getReset);
app.post('/reset/:token', userController.postReset);
app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);
app.get('/contact', contactController.getContact);
app.post('/contact', contactController.postContact);
app.get(
  '/account/verify',
  passportConfig.isAuthenticated,
  userController.getVerifyEmail
);
app.get(
  '/account/verify/:token',
  passportConfig.isAuthenticated,
  userController.getVerifyEmailToken
);
app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
app.post(
  '/account/profile',
  passportConfig.isAuthenticated,
  userController.postUpdateProfile
);
app.post(
  '/account/password',
  passportConfig.isAuthenticated,
  userController.postUpdatePassword
);
app.post(
  '/account/delete',
  passportConfig.isAuthenticated,
  userController.postDeleteAccount
);
app.get(
  '/account/unlink/:provider',
  passportConfig.isAuthenticated,
  userController.getOauthUnlink
);

/**
 * API examples routes.
 */
app.get('/api', apiController.getApi);
app.get('/api/lastfm', apiController.getLastfm);
app.get('/api/nyt', apiController.getNewYorkTimes);
app.get(
  '/api/steam',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getSteam
);
app.get('/api/stripe', apiController.getStripe);
app.post('/api/stripe', apiController.postStripe);
app.get('/api/scraping', apiController.getScraping);
app.get('/api/twilio', apiController.getTwilio);
app.post('/api/twilio', apiController.postTwilio);
app.get('/api/clockwork', apiController.getClockwork);
app.post('/api/clockwork', apiController.postClockwork);
app.get(
  '/api/foursquare',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getFoursquare
);
app.get(
  '/api/tumblr',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getTumblr
);
app.get(
  '/api/facebook',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getFacebook
);
app.get(
  '/api/github',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getGithub
);
app.get(
  '/api/twitter',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getTwitter
);
app.post(
  '/api/twitter',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.postTwitter
);
app.get(
  '/api/twitch',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getTwitch
);
app.get(
  '/api/instagram',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getInstagram
);
app.get('/api/paypal', apiController.getPayPal);
app.get('/api/paypal/success', apiController.getPayPalSuccess);
app.get('/api/paypal/cancel', apiController.getPayPalCancel);
app.get('/api/lob', apiController.getLob);
app.get('/api/upload', lusca({ csrf: true }), apiController.getFileUpload);
app.post(
  '/api/upload',
  upload.single('myFile'),
  lusca({ csrf: true }),
  apiController.postFileUpload
);
app.get(
  '/api/pinterest',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getPinterest
);
app.post(
  '/api/pinterest',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.postPinterest
);
app.get('/api/here-maps', apiController.getHereMaps);
app.get('/api/google-maps', apiController.getGoogleMaps);
app.get(
  '/api/google/drive',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getGoogleDrive
);
app.get('/api/chart', apiController.getChart);
app.get(
  '/api/google/sheets',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getGoogleSheets
);
app.get(
  '/api/quickbooks',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getQuickbooks
);

/**
 * OAuth authentication routes. (Sign in)
 */
app.get(
  '/auth/instagram',
  passport.authenticate('instagram', { scope: ['basic', 'public_content'] })
);
app.get(
  '/auth/instagram/callback',
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  }
);
app.get('/auth/snapchat', passport.authenticate('snapchat'));
app.get(
  '/auth/snapchat/callback',
  passport.authenticate('snapchat', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  }
);
app.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email', 'public_profile'] })
);
app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  }
);
app.get('/auth/github', passport.authenticate('github'));
app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  }
);
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: [
      'profile',
      'email',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/spreadsheets.readonly',
    ],
    accessType: 'offline',
    prompt: 'consent',
  })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  }
);
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  }
);
app.get(
  '/auth/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE' })
);
app.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  }
);
app.get('/auth/twitch', passport.authenticate('twitch', {}));
app.get(
  '/auth/twitch/callback',
  passport.authenticate('twitch', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  }
);

/**
 * OAuth authorization routes. (API examples)
 */
app.get('/auth/foursquare', passport.authorize('foursquare'));
app.get(
  '/auth/foursquare/callback',
  passport.authorize('foursquare', { failureRedirect: '/api' }),
  (req, res) => {
    res.redirect('/api/foursquare');
  }
);
app.get('/auth/tumblr', passport.authorize('tumblr'));
app.get(
  '/auth/tumblr/callback',
  passport.authorize('tumblr', { failureRedirect: '/api' }),
  (req, res) => {
    res.redirect('/api/tumblr');
  }
);
app.get('/auth/steam', passport.authorize('openid', { state: 'SOME STATE' }));
app.get(
  '/auth/steam/callback',
  passport.authorize('openid', { failureRedirect: '/api' }),
  (req, res) => {
    res.redirect(req.session.returnTo);
  }
);
app.get(
  '/auth/pinterest',
  passport.authorize('pinterest', { scope: 'read_public write_public' })
);
app.get(
  '/auth/pinterest/callback',
  passport.authorize('pinterest', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/api/pinterest');
  }
);
app.get(
  '/auth/quickbooks',
  passport.authorize('quickbooks', {
    scope: ['com.intuit.quickbooks.accounting'],
    state: 'SOME STATE',
  })
);
app.get(
  '/auth/quickbooks/callback',
  passport.authorize('quickbooks', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo);
  }
);

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
  });
}

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(
    '%s App is running at http://localhost:%d in %s mode',
    chalk.green('✓'),
    app.get('port'),
    app.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
