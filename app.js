/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */

/**
 * Module dependencies.
 */
const express = require('express');

// const router = express.Router();
const https = require('https');
// const http = require('http');
const ExpressGraphQL = require('express-graphql');
const compression = require('compression');
const session = require('express-session');
// const request = require('request');
const request = require('request-promise');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const qs = require('querystring');
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
const axios = require('axios');


const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLSchema,
  GraphQLInputObjectType
} = require('graphql');

const upload = multer({ dest: path.join(__dirname, 'uploads') });

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env.example' });
// load mongoose model
// const Db = require('./models/User');
const User = require('./models/User');
const Portal = require('./models/Portal');
const Keywords = require('./models/Keywords');
// const InputKeywordType = require('./models/InputKeywordType');

// Types
const UserType = require('./graphql-types/UserType');
const PortalType = require('./graphql-types/PortalType');
const KeywordType = require('./graphql-types/KeywordType');
const FacebookType = require('./graphql-types/FacebookType');
const InstagramType = require('./graphql-types/InstagramType');
const InputFacebookType = require('./graphql-types/InputFacebookType');
const SettingsType = require('./graphql-types/SettingsType');
const TokenType = require('./graphql-types/TokenType');
const InputSettingsType = require('./graphql-types/InputSettingsType');
const FacebookPageContentType = require('./graphql-types/FacebookPageContentType');
const InputKeywordType = require('./graphql-types/InputKeywordType');
const InputTokenType = require('./graphql-types/InputTokenType');
const youtubeVideo = require('./graphql-types/YoutubeVideo');


// const User = require('./models/user-repo.model');
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
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.',
    chalk.red('✗'));
  process.exit();
});

// ____________________express stuff _______________________________________________________________

/**
 * Express configuration.
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({

  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
  store: new MongoStore({
    url: process.env.MONGODB_URI,
    autoReconnect: true,
  }),
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// app.use((req, res, next) => {
//   if (req.path === '/api/upload') {
//     // Multer multipart/form-data handling needs to occur before the Lusca CSRF check.
//     next();
//   } else {
//     lusca.csrf()(req, res, next);
//   }
// });
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
app.use('/',
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use('/js/lib',
  express.static(path.join(__dirname, 'node_modules/chart.js/dist'), {
    maxAge: 31557600000,
  }));
app.use('/js/lib',
  express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd'), {
    maxAge: 31557600000,
  }));
app.use('/js/lib',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'), {
    maxAge: 31557600000,
  }));
app.use('/js/lib',
  express.static(path.join(__dirname, 'node_modules/jquery/dist'), {
    maxAge: 31557600000,
  }));
app.use('/webfonts',
  express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'),
    { maxAge: 31557600000 }));

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
app.get('/account/verify',
  passportConfig.isAuthenticated,
  userController.getVerifyEmail);
app.get('/account/verify/:token',
  passportConfig.isAuthenticated,
  userController.getVerifyEmailToken);
app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
app.post('/account/profile',
  passportConfig.isAuthenticated,
  userController.postUpdateProfile);
app.post('/account/password',
  passportConfig.isAuthenticated,
  userController.postUpdatePassword);
app.post('/account/delete',
  passportConfig.isAuthenticated,
  userController.postDeleteAccount);
app.get('/account/unlink/:provider',
  passportConfig.isAuthenticated,
  userController.getOauthUnlink);

/**
 * API examples routes.
 */
app.get('/api', apiController.getApi);

app.get('/api/facebook',
  passportConfig.isAuthenticated,
  passportConfig.isAuthorized,
  apiController.getFacebook);

// app.get(
//   '/api/instagram',
//   passportConfig.isAuthenticated,
//   passportConfig.isAuthorized,
//   apiController.getInstagram
// );


/**
 * OAuth authentication routes. (Sign in)
 */
// app.get('/auth/instagram3',
// eslint-disable-next-line no-undef
// eslint-disable-next-line camelcase
// passport.authenticate('instagram', { scope: ['user_profile', 'user_media'] }));
// app.get('/auth/instagram/callback',
//   passport.authenticate('instagram', { failureRedirect: '/login' }),
//   (req, res) => {
//     res.redirect(req.session.returnTo || '/');
//   });

app.get('/auth/instagram', (req, res) => {
  const clientId = process.env.INSTAGRAM_ID;
  const redirectUri = process.env.INSTAGRAM_ID_URI;
  res.redirect(`https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`);
});
app.get('/auth/instagram/callback', (req, res) => {
  // console.log('this is the code', req.query.code);

  const { code } = req.query;
  const clientId = process.env.INSTAGRAM_ID;
  const clientSecret = process.env.INSTAGRAM_SECRET;

  console.log('this is the code ', code);
  const redirectUri = process.env.INSTAGRAM_ID_URI;
  const url = 'https://api.instagram.com/oauth/access_token';

  const body = {
    client_id: clientId, client_secret: clientSecret, grant_type: 'authorization_code', redirect_uri: redirectUri, code
  };

  request({
    method: 'POST',
    uri: 'https://api.instagram.com/oauth/access_token',
    body: qs.stringify(body),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then((response) => {
      // eslint-disable-next-line camelcase
      const { access_token, user_id } = JSON.parse(response);
      console.log('RESPonse', response);
      // eslint-disable-next-line camelcase
      const accessToken = access_token;
      console.log('ACCESS_TOKEN', accessToken, typeof (response));
      User.findById(req.user.id, (err, user) => {
        if (err) { return (err); }
        // user.instagram = InstagramId;
        user.tokens.push({ kind: 'instagram', accessToken: access_token });
        console.log('this is after push', user.tokens);
        console.log('ACCESS_TOKEN', accessToken, typeof (response));
        user.save((err) => {
          req.flash('info', { msg: 'Instagram account has been linked.' });
          res.redirect('/account');
        });
      });
    });
});
// });


app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['email', 'public_profile', 'manage_pages'] }));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  });

app.get('/auth/google',
  passport.authenticate('google', {
    scope: [
      'profile',
      'email',
      'https://www.googleapis.com/auth/youtube.readonly'
      // 'https://www.googleapis.com/auth/spreadsheets.readonly',
    ],
    accessType: 'offline',
    prompt: 'consent',
  }));
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/');
  });


// ________________________________________graphql starts here_________________________________


// instead of the single schema above we now use a RootQuerytype
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    portal: {
      type: PortalType,
      description: 'A single portal',
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) => Portal.findOne({ _id: args.id }, (err, docs) => {
        console.log(err, docs);
      })
    },
    portals: {
      type: new GraphQLList(PortalType),
      description: 'List of all portals',
      resolve: () => Portal.find({}, (err, docs) => {
        console.log(err, docs);
      })
    },
    users: {
      type: new GraphQLList(UserType),
      description: 'List of all user',
      args: {
        keywords: { type: GraphQLString },
      },
      resolve: () => User.find({}, (err, docs) => {
        // docs.forEach
        console.log(err, docs);
      })
    },
    user: {
      type: UserType,
      description: 'A single user',
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) => User.findOne({ _id: args.id }, (err, docs) => {

        // console.log(err, docs);
      })
    },
    keyword: {
      type: KeywordType,
      description: 'A single keyword that denotes an interest of a user',
      args: {
        id: { type: GraphQLID },
        keyword: { type: GraphQLString },
      },
      resolve: (parent, args) => Keywords.findOne({ _id: args.id }, (err, docs) => {
        // do not use a find one here please look up and use a 3 letter matching system
        console.log(err, docs);
      })
    },
    keywords: {
      type: new GraphQLList(KeywordType),
      description: 'List of all Keywords',
      resolve: () => Keywords.find({}, (err, docs) => {
        // docs.forEach
        console.log(err, docs);
      })
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
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        wachtwoord: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const user = new User({
          firstname: args.firstname,
          lastname: args.lastname,
          email: args.email,
          wachtwoord: args.wachtwoord,
        });
        console.log('User', user);
        user.save((err, a) => {
          if (err) return console.error(err);
          console.log('after save: ', a);
        });
        console.log(args);
        return user;
      },
    },
    // update user starts here
    updateUser: {
      type: UserType,
      description: 'Update a  User',
      args: {
        id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
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
        keywords: { type: new GraphQLList(InputKeywordType) },
        profession: { type: GraphQLString },
        genre: { type: GraphQLString },
        pageRules: { type: GraphQLString },
        pageContent: { type: GraphQLString },
        hyperlinks: { type: GraphQLString }, // fb,youtube,insta
        pageBuilder: { type: GraphQLString },
        portals: { type: GraphQLString },
        socialmedia: { type: GraphQLString },
        oauth: { type: GraphQLBoolean },
        referral: { type: GraphQLBoolean },
        admin: { type: GraphQLBoolean },
      },
      resolve: (parent, args, request) => {
        // console.log('this is the session', request.session.passport.user);
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          throw new Error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          throw new Error('you are not authorised');
        }
        const user = {
          id: args.id,
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
        console.log(args.keywords);
        // find user and then add info with .update
        // how do you find user?
        const query = { _id: args.id };
        // console.log(query);
        const a = User.findByIdAndUpdate(query, {
          ...args
        }, (err, docs) => {
          console.log(err, docs);
        });
        return user;
      },
    },
    deleteUser: {
      type: PortalType,
      description: 'Delete a  User',
      args: {
        id: { type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },

      },
      resolve: (parent, args, request) => {
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          throw new Error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          throw new Error('you are not authorised');
        }
        User.deleteOne({ _id: args.id }, (err) => {
          if (err) return console.log(err);
          // deleted at most one user document
        });
        return args;
      },
    },
    createPortal: {
      type: PortalType,
      description: 'Add a  portal',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLString },
        typeof2: { type: GraphQLString },
        settings: { type: (InputSettingsType) },
        layout: { type: GraphQLString },
        pages: { type: GraphQLString },
        footer: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },

      },
      resolve: (parent, args, request) => {
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          throw new Error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          throw new Error('you are not authorised');
        }

        const portal = new Portal({
          id: args.id,
          name: args.name,
          type: args.type,
          typeof2: args.typeof2,
          settings: args.settings,
          layout: args.layout,
          pages: args.pages,
          footer: args.footer,
          title: args.title,
          description: args.description,
        });
        console.log('Portal', portal);
        portal.save((err, a) => {
          if (err) return console.error(err);
          console.log('after save: ', a);
        });
        console.log(args);
        return portal;
      },
    },
    updatePortal: {
      type: PortalType,
      description: 'Update a  Portal',
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLString },
        typeof2: { type: GraphQLString },
        settings: { type: (InputSettingsType) },
        layout: { type: GraphQLString },
        pages: { type: GraphQLString },
        footer: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve: (parent, args, request) => {
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          throw new Error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          throw new Error('you are not authorised');
        }
        const portal = {
          id: args.id,
          name: args.name,
          type: args.type,
          typeof2: args.typeof2,
          settings: args.settings,
          layout: args.layout,
          pages: args.pages,
          footer: args.footer,
          title: args.title,
          description: args.description,
        };

        const query = { _id: args.id };
        // console.log(query);
        const a = Portal.updateOne(query, {
          ...args

        }, (err, docs) => {

        });

        return portal;
      },
    },
    deletePortal: {
      type: PortalType,
      description: 'Delete a  portal',
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
      },
      resolve: (parent, args, request) => {
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          console.error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          console.error('you are not authorised');
        }
        // const portal = new Portal();


        // console.log('Portal', portal);
        Portal.deleteOne({ _id: args.id }, (err) => {
          if (err) return console.log(err);
          // deleted at most one portal document
        });

        return args;
      },
    },
    addKeyword: {
      type: KeywordType,
      description: 'Add a  Keyword',
      args: {
        keyword: { type: GraphQLString },
      },
      resolve: (parent, args, request) => {
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          throw new Error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          throw new Error('you are not authorised');
        }
        const keyword = new Keywords({
          keyword: args.keyword,
        });
        console.log('Keywords', keyword);
        keyword.save((err, a) => {
          if (err) return console.error(err);
          console.log('after save: ', a);
        });
        console.log(args);
        return keyword;
      },
    },
    getInstagramPermissions: {
      type: TokenType,
      description: 'Add permissions for instagram this will trigger a window to open',
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args, request) => User.findOne({ _id: args.id }, (err, docs) => {
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          throw new Error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          throw new Error('you are not authorised');
        }
        console.log('next step is getinstacode');
        const clientId = process.env.INSTAGRAM_ID;
        const reDirectInstaUri = process.env.INSTAGRAM_ID_URI;
        // const clientSecret = process.env.INSTAGRAM_SECRET;
        // const instagramRedirectUri = process.env.INSTAGRAM_ID_URI;
        // const code = null;
        const openAuthWindow = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${reDirectInstaUri}&scope=user_profile,user_media&response_type=code`;
        // const openAuthWindow = 'https://api.instagram.com/oauth/authorize?client_id=681126272459453&redirect_uri=https://33a5a1bfd7c0.ngrok.io/auth/instagram/callback&scope=user_profile,user_media&response_type=code';

        // const getToken = `https://api.instagram.com/oauth/access_token \
        // -F client_id=681126272459453 \
        // -F client_secret=${clientSecret} \
        // -F grant_type=authorization_code \
        // -F redirect_uri=${instagramRedirectUri} \
        // -F code=${code}`;


        // console.log(openAuthWindow);
        // this will open a pop up window so #note front-end, the response is based on user input.
        // if you run this code without user input expect an error
        axios.get(openAuthWindow)
          .then((response) => {
            console.log('response recieved', response);
            // code = response.code; // 1st run openAuthWindow in browser
            // axios.post(getToken);
            // example response
            // https://4c651e81.ngrok.io/auth/callback?code=AQBNVNdRVZh0oDg_yEIXdW441kS5J6yxLAR2Nss-u1wYiQtuPMwbmNG1zDcT_JhxNbnaBBvT2AqRBnVe1Ro4zaadYfilTxVsuM12bLJSEX7hAEroAR7PnhyWII89sDs-1XmnvUvzTjBMRlAZnB_sjC18sz-1LVidjIHlBiaHmkD2kU15_IdowltEpgX40qE51OHHQyzfdMGzzdDiH5-5gE5ElGY8BOuxy-rDh4j3vYF47w#_

            // console.log('code recieved', response.code);
          })
          .catch((err) => console.log('this is the error', err));
        // get accessToken
        // eslint-disable-next-line max-len
        // {"access_token": "IGQVJWUWctb09tNWxobFE0azQ1WUtxM0szODFtclB0SVVqVUJRaXhoYnhmaV9hVURzeXVfRFI5YTZAfSUw0aUVqMTYtRXluY3dvZAWlSMF95ZAUU1dnJFU0RUR3o2enF4Y183TFBOSjVZAQkxZAMnpNVTZAfS29DLVJmaTRpU3VJ", "user_id": 17841400762060616}%

        // const token = new InputTokenType({
        //   kind: 'Instagram',
        //   accessToken: args.accessToken
        // });
        // console.log('Tokens', InputTokenType);
        // token.save((err, a) => {
        //   if (err) return console.error(err);
        //   console.log('after save: ', a);
        // });
        console.log(args);
        return response;
      }),
    },
    getFacebookPageID: {
      type: FacebookType,
      description: 'Gets all the accounts we want from facebook once a user has granted permissions',
      args: {
        id: { type: GraphQLString },
        accessToken: { type: GraphQLString },
        facebook: { type: InputFacebookType }
      },
      resolve: async (parent, args, request) => {
        console.log(session.session);
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          throw new Error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          throw new Error('you are not authorised');
        }
        try {
          // get user
          const user = await User.findById(args.id);
          const { accessToken } = user.tokens.find((item) => item.kind === 'facebook');
          const userId = user.facebookId;
          const getFBaccounts = `https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`;

          // get pages
          const fbResponse = await axios.get(getFBaccounts);

          // use mongoose prototype method "save" to update the user
          user.facebookpages = fbResponse.data.data;
          // console.log('this is before save ', user.facebookpages);
          await user.save();
          // console.log('this is the saved content', user.facebookpages);
        } catch (e) {
          console.log(e);
        }
      }
    },


    getFacebookPageContent: {
      type: FacebookType,
      description: 'Gets all the content we want from facebook once a user has granted permissions',
      args: {
        id: { type: GraphQLString },
        accessToken: { type: GraphQLString },
        fanCount: { type: GraphQLString },
        pageName: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        if (!session.userId) {
          throw new Error('you are not logged in');
        }
        try {
          console.log('next step is getcontent');
          const user = await User.findById(args.id);
          const { pageName } = args;
          // eslint-disable-next-line camelcase
          const { access_token } = user.facebookpages.find((item) => (item) => item === `${pageName}`);
          const { id } = user.facebookpages.find((item) => (item) => item === `${pageName}`);
          console.log(pageName, access_token, id);
          const fieldsToGet = 'birthday,about,band_members,bio,connected_instagram_account,contact_address,cover,current_location,description,display_subtext,emails,engagement,fan_count,featured_video,founded,general_info,genre,global_brand_page_name,global_brand_root_id,hometown,instagram_business_account,is_community_page,is_owned,is_published,is_webhooks_subscribed,link,location,name,page_token,personal_info,personal_interests,phone,place_type,single_line_address,username,published_posts,videos';
          // eslint-disable-next-line camelcase
          const getAccountContents = `https://graph.facebook.com/${id}?fields=${fieldsToGet}&access_token=${access_token}`;
          const fbpageContent = await axios.get(getAccountContents);

          user.facebookPageContents = fbpageContent.data;
          // console.log('this is before save ', user.facebookPageContents);
          await user.save();
          // console.log('this is after save ', user.facebookPageContents);
        } catch (e) {
          console.log(e);
        }
      }
    },
    getInstagramPageContent: {
      type: InstagramType,
      description: 'Gets all the content we want from Instagram once a user has granted permissions',
      args: {
        id: { type: GraphQLString },
        accessToken: { type: GraphQLString },
        fanCount: { type: GraphQLString },
        pageName: { type: GraphQLString },
      },
      resolve: async (parent, args, request) => {
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          throw new Error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          throw new Error('you are not authorised');
        }
        try {
          console.log('next step is getcontent');
          const user = await User.findById(args.id);
          const { pageName } = args;
          // eslint-disable-next-line camelcase
          const { access_token } = user.facebookpages.find((item) => (item) => item === `${pageName}`);
          const { id } = user.facebookpages.find((item) => (item) => item === `${pageName}`);
          console.log(pageName, access_token, id);
          const fieldsToGet = 'id,caption,media_type,media_url,permalink,thumbnail_url,username,timestamp,username,children';

          // eslint-disable-next-line camelcase
          const getAccountContents = `https://graph.instagram.com/me/media?fields=${fieldsToGet}&access_token=${access_token}`;
          //         `https://graph.instagram.com/{media-id}?fields=${fieldsToGet}&access_token=${access_token}`;
          // `https://graph.instagram.com/me/media?fields=${fieldsToGet}&access_token=${access_token}`
          const instaPageContent = await axios.get(getAccountContents);

          user.instagramContents = instaPageContent.data;
          // console.log('this is before save ', user.instagramContents);
          await user.save();
          // console.log('this is after save ', user.instagramContents);
        } catch (e) {
          console.log(e);
        }
      }
    },
    youtubeResolver: {
      type: UserType,
      description: 'A gets video contents of a user',
      args: {
        id: { type: GraphQLString },
        channelID: { type: GraphQLString },
        uploadID: { type: GraphQLString },

      },
      resolve: async (parent, args, request) => {
        const sessionId = request.session.passport.user;
        if (!sessionId) {
          throw new Error('you are not logged in');
        }
        if (sessionId !== args.id || User.admin === false) {
          throw new Error('you are not authorised');
        }
        try {
          const user = await User.findById(args.id);
          console.log('next step is getchannel');
          const apiKey = process.env.GOOGLE_YOUTUBE_API_KEY;
          const { accessToken } = user.tokens.find((item) => item.kind === 'google');

          const getChannelID = `https://www.googleapis.com/youtube/v3/channels?part=id&mine=true&key=${apiKey}`;
          // console.log('ran getChannelID ');
          let channelID = null;
          await axios.get(getChannelID, { headers: { Authorization: `Bearer ${accessToken}` } })
            .then((response) => {
              channelID = response.data.items[0].id;
              console.log('channelID', response.data.items[0].id);
            })
            .catch((err) => console.log(err));

          const getUploadID = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelID}&key=${process.env.GOOGLE_YOUTUBE_API_KEY}`;
          let uploadID = null;
          await axios.get(getUploadID, { headers: { Authorization: `Bearer ${accessToken}` } })
            .then((response) => {
              uploadID = response.data.items[0].contentDetails.relatedPlaylists.uploads;
              console.log('getUploadID', response.data.items[0].contentDetails.relatedPlaylists.uploads);
            })
            .catch((err) => console.log(err));
          const videoPlaylistURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${uploadID}&key=${process.env.GOOGLE_YOUTUBE_API_KEY}`;
          // const videoPlaylistURL = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.GOOGLE_YOUTUBE_API_KEY}`
          let videos = [];
          await axios.get(videoPlaylistURL, { headers: { Authorization: `Bearer ${accessToken}` } }).then((response) => {
            console.log('videoPlaylistURL', response.data);
            videos = response.data.items;
          })
            .catch((err) => console.log(err));

          console.log('videos', videos);
          user.youtubeContents = videos;
          // console.log('this is before save ', user.instagramContents);
          await user.save();
          // console.log('this is after save ', user.instagramContents);
        } catch (e) {
          console.log(e);
        }
      }

    },
  }
  )
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
app.use('/graphql',
  ExpressGraphQL({
    schema,
    graphiql: true,
  }));

// ----------------------Express config to be adjusted after graphql works------------------------//

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
  console.log('%s App is running at http://localhost:%d in %s mode',
    chalk.green('✓'),
    app.get('port'),
    app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
