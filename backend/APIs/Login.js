const userModel = require('../Modals/users');
const bcrypt = require('bcrypt');

const userLogin = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({ success: false, message: 'Both username and password are required' });
    }

    userModel.findOne({ username: username })
        .then(user => {
            if (user) {
                // Compare the provided password with the hashed password stored in the database
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            res.json({ success: true, message: 'Authentication successful' });
                        } else {
                            res.json({ success: false, message: 'Incorrect password' });
                        }
                    })
                    .catch(err => {
                        res.json({ success: false, message: 'Authentication error', error: err });
                    });
            } else {
                res.json({ success: false, message: 'Username not found' });
            }
        })
        .catch(err => {
            res.json({ success: false, message: 'Authentication error', error: err });
        });
};

module.exports = userLogin;
