require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const GEMINI_MODEL = "gemini-2.5-flash";

module.exports = {
    ai,
    GEMINI_MODEL,
    upload
};
