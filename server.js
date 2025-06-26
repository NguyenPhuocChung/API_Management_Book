require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối MongoDB
require('./config/db');
// cấu hình dường dân đây nhe
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
