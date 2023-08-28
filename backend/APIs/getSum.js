const cashModel = require('../Modals/Transactions')

const sum = (req, res) => {
    const username = req.params.username;
    const option = req.params.option;

    const query = username ? { username: username, option: option } : { option: option}; // Add a query for filtering by username and item if provided

    cashModel.aggregate([
        { $match: query }, // Apply the username and item filters
        { $group: { _id: null, totalAmount: { $sum: '$amount' } } } // Sum the amount for the matched documents
    ])
    .then((sums) => res.json(sums[0])) // Return the first sum object
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    });
}
module.exports = sum