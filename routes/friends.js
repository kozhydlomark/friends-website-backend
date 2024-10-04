const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/add', async (req, res) => {
    const token = req.headers['x-auth-token'];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user.id);

    user.friends.push(req.body);
    await user.save();

    res.json(user.friends);
});

router.get('/', async (req, res) => {
    const token = req.headers['x-auth-token'];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user.id);

    res.json(user.friends);
});

module.exports = router;
