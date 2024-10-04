const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const friendsRoutes = require('./routes/friends');

const app = express();
// Налаштування CORS для дозволу запитів з localhost:5173
app.use(cors({
    origin: 'https://friends-website-dusky.vercel.app/',  // Дозволити лише вашому клієнту
    credentials: true,  // Дозволити передачу cookie з обох сторін
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Тестовий маршрут для перевірки статусу сервера
app.get('/test', (req, res) => {
    res.json({ status: 'Server is running', uptime: process.uptime() });
});

app.use('/auth', authRoutes);
app.use('/friends', friendsRoutes);

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
