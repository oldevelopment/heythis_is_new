// const uuid = require('uuid');
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  // console.log(req);
  // const uniqueId = uuid.v4();
  // console.log(uniqueId);
  // res.send(`Hit home page. Received the unique id: ${uniqueId}\n`);
  res.render('home', {
    title: 'Home'
  });
};
