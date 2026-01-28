const express = require("express");
const router = express.Router();
const { upload } = require("../utils/gemini");

const { generateText, generateAudio, generateDocument, generateImage } = require("../controllers/ai");


router.post("/generate-text", generateText);
router.post(
    "/generate-image",
    upload.single("image"),
    generateImage
);
router.post(
    "/generate-audio",
    upload.single("audio"),
    generateAudio
);
router.post(
    "/generate-document",
    upload.single("document"),
    generateDocument
);

module.exports = router;
