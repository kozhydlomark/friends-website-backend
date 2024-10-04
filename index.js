const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const friendsRoutes = require('./routes/friends');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/auth', authRoutes);
app.use('/friends', friendsRoutes);

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
