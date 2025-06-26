const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/userController");
// câu hình Api đây nhe
router.get("/", getAllUsers); // GET /api/users

module.exports = router;
