require("dotenv").config();
const mongoose = require("mongoose");

const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4ehb2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(dbURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB error:", err));
