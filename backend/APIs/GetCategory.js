const expCategoryModel = require('../Modals/expCategory')
const getCategory = (req, res) => {
    const { username, option } = req.params;
    const query = option ? { option: option, username: username } : { username: username };
    expCategoryModel.find(query)
      .then((items) => res.json(items))
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
      });
  }
  module.exports = getCategory