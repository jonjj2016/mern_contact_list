const express = require('express');
const connectDb = require('./config/db');
const dotENV = require('dotenv');
//seting environmental vaues
dotENV.config({ path: './config/config.env' });

// connecting to db
connectDb();
const app = express();
app.use(express.json({ extended: false }));
// import routes
const contactRoutes = require('./routs/contacts');
const userRoutes = require('./routs/users');
const authRoutes = require('./routs/auth');
//mount Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/contacts', contactRoutes);

const PORT = parseInt(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
