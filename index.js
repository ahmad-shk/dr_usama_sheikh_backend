// index.js

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxabH6-NEbRuoIZNgt2vmn_9zmFkO6e2SHeiMaZDz3j6v5KZMq5FxTfcauLJCkRz4LN/exec";

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, req.body);
    res.json({ success: true, result: response.data });
  } catch (error) {
    console.error("Error sending to Google Sheet:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});