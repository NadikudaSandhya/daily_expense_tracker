const User = require('../models/User');

exports.createUser = async (req, res) => {
    const { name, email, mobile } = req.body;
    try {
        const user = new User({ name, email, mobile });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

exports.getUserDetails = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user details', error });
    }
};
