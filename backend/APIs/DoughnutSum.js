const cashModel = require('../Modals/Transactions');

const Dsum = (req, res) => {
    const username = req.params.username;
    const optionsArray = req.body.option; // Receive options array from request body

    const query = username ? { username: username, option: { $in: optionsArray } } : { option: { $in: optionsArray } };

    cashModel.aggregate([
        { $match: query },
        { $group: { _id: '$option', totalAmount: { $sum: '$amount' } } }
    ])
    .then((sums) => {
        const sumArray = optionsArray.map((opt) => {
            const sumObject = sums.find((sum) => sum._id === opt);
            return sumObject ? sumObject.totalAmount : 0;
        });
        res.json(sumArray);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    });
}

module.exports = Dsum;
