const userModel = require('../Modals/users'); // Make sure the path is correct
const bcrypt = require('bcrypt');

const Register = async (req, res) => {
    const { username, password, firstname, lastname, email } = req.body;

    try {
        const existingUser = await userModel.findOne({ $or: [{ username: username }, { email: email }] });

        if (existingUser) {
            if (existingUser.username === username) {
                return res.json({ success: false, message: 'Username already registered' });
            } else if (existingUser.email === email) {
                return res.json({ success: false, message: 'Email already registered' });
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.create({
            username: username,
            password: hashedPassword,
            firstname: firstname,
            lastname: lastname,
            email: email,
        });

        res.json({ success: true, message: 'User Created' });
    } catch (err) {
        res.json({ success: false, message: 'User registration error', error: err });
    }
};

module.exports = Register;
