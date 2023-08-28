const cashModel = require('../Modals/Transactions')

const transaction = (req, res) => {
    const { username, amount, selectedcategory, option } = req.body;

    cashModel.create({
                    username: username,
                    amount:amount,
                    selectedcategory: selectedcategory,
                    option: option,    
                })
                .then(() => {
                    res.json({ success: true, message: 'Added' });
                })
                .catch(err => {
                    res.json({ success: false, message: 'Nope', error: err });
                });
            }
module.exports = transaction