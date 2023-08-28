const expCategoryModel = require('../Modals/expCategory')

const addCategory = (req, res) => {
    const {  username, category, option, color} = req.body;
    expCategoryModel.create({
                    username:username,
                    category: category,
                    option: option,   
                    color: color  
                })
                .then(() => {
                    res.json({ success: true, message: 'Added' });
                })
                .catch(err => {
                    res.json({ success: false, message: 'Nope', error: err });
                });
            }
module.exports = addCategory