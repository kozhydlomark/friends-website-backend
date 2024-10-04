const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const friendsRoutes = require('./routes/friends');

const app = express();
app.use(cors({
    origin: '*',  // Дозволити всім доменам
}));

app.use(express.json());

// Підключення до MongoDB
mongoose.connect(process.env.MONGO_URI);

// Тестовий маршрут для перевірки статусу сервера
app.get('/test', (req, res) => {
    res.json({ status: 'Server is running', uptime: process.uptime() });
});

app.use('/auth', authRoutes);
app.use('/friends', friendsRoutes);

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
