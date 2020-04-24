/* eslint-disable no-tabs */
// // data
// const authors = [
//   { id: 1, name: 'J.K. Rowling' },
//   { id: 2, name: 'J.R.R. Tolkien' },
//   { id: 3, name: 'Brent Weeks' },
// ];
// const books = [
//   { id: 1, name: 'Harry potter and the Chamber of Secrets', authorId: 1 },
//   { id: 2, name: 'Harry potter and the Prisoner of Azkaban', authorId: 1 },
//   { id: 3, name: 'Harry potter and the Goblet of Fire', authorId: 1 },
//   { id: 4, name: 'The Fellowship of the ring', authorId: 2 },
//   { id: 5, name: 'The Two Towers', authorId: 2 },
//   { id: 6, name: 'The Return of the King', authorId: 2 },
//   { id: 7, name: 'The Way of the Shadows', authorId: 3 },
//   { id: 8, name: 'The Beyond the Shadows', authorId: 3 },
// ];
// const portals = [
//   {
//     id: 1, name: 'rotterdam', type: 'city', portalId: 1, url: 'p.rotterdam',
//   },
//   {
//     id: 2, name: 'amsterdam', type: 'city', portalId: 1, url: 'p.amsterdam',
//   },
//   {
//     id: 3, name: 'Breda', type: 'city', portalId: 1, url: 'p.den haag',
//   },
//   {
//     id: 4, name: 'Hip-hop', type: 'music', portalId: 2, url: 'p.soul',
//   },
//   {
//     id: 5, name: 'Movies', type: 'film', portalId: 2, url: 'p.movies',
//   },
//   {
//     id: 6, name: 'Creative', type: 'city', portalId: 2, url: 'p.rotterdam',
//   },
//   {
//     id: 7, name: 'The Way of the Shadows', type: 'city', portalId: 3, url: 'p.rotterdam',
//   },
//   {
//     id: 8, name: 'The Beyond the Shadows', type: 'city', portalId: 3, url: 'p.rotterdam',
//   },
// ];


// const accountInfo=[{
//     id:		1,
// 	creationdate:	15-04-2020,			//		(scalar Date)
// 	acounttype:	// person or place	y
// 	accountactive	// true
// 	site:	// heythis.is/username
// 	companyname:
// 	firstname:
// 	lastname:
// 	address
// 	pobox:
// 	city
// 	country
// 	telephone
// 	email:
// 	ww:
// 	oauth:	// facebook, google or instagram (grab email)
// 	referral:	/* should be a field where we can connect the referral
// to activate the upgraded when being succesfull. most basic is add winning code to unlock

// }
// ]
const data = {
  portals: [
    { id: 1, name: 'Harry potter and the Chamber of Secrets', authorId: 1 },
    { id: 2, name: 'Harry potter and the Prisoner of Azkaban', authorId: 1 },
    { id: 3, name: 'Harry potter and the Goblet of Fire', authorId: 1 },
    { id: 4, name: 'The Fellowship of the ring', authorId: 2 },
    { id: 5, name: 'The Two Towers', authorId: 2 },
    { id: 6, name: 'The Return of the King', authorId: 2 },
    { id: 7, name: 'The Way of the Shadows', authorId: 3 },
    { id: 8, name: 'The Beyond the Shadows', authorId: 3 },
  ],
  users: [
    {
      id: 1,
      accountInfo: 'to be an object later',
      lasttname: 'Test last name',
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
  ],
  userinfotype: [
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
  ]
};
module.exports = data;
