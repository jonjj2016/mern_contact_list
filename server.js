const express = require('express');
const app = express();
// import routes
const contactRoutes = require('./routs/contacts');
const userRoutes = require('./routs/users');
const authRoutes = require('./routs/auth');
//mount Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
