const { ai, GEMINI_MODEL } = require("../utils/gemini");



const generateText = async (req, res, next) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({
                message: "Prompt is required"
            });
        }

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                {
                    role: "user",
                    parts: [{ text: prompt }]
                }
            ]
        });

        res.status(200).json({
            success: true,
            result: response.text
        });
    } catch (error) {
        next(error);
    }
};


const generateImage = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Image file is required"
            });
        }

        const { prompt } = req.body;

        const base64Image = req.file.buffer.toString("base64");

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt || "Jelaskan isi gambar ini" },
                        {
                            inlineData: {
                                mimeType: req.file.mimetype,
                                data: base64Image
                            }
                        }
                    ]
                }
            ]
        });

        res.status(200).json({
            success: true,
            result: response.text
        });
    } catch (error) {
        next(error);
    }
};
const generateDocument = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Document file is required"
            });
        }

        const { prompt } = req.body;

        const base64Doc = req.file.buffer.toString("base64");

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt || "Ringkas isi dokumen ini" },
                        {
                            inlineData: {
                                mimeType: req.file.mimetype,
                                data: base64Doc
                            }
                        }
                    ]
                }
            ]
        });

        res.json({
            success: true,
            result: response.text
        });
    } catch (error) {
        next(error);
    }
};
const generateAudio = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Audio file is required"
            });
        }

        const { prompt } = req.body;

        const base64Audio = req.file.buffer.toString("base64");

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt || "Transkripsikan audio ini" },
                        {
                            inlineData: {
                                mimeType: req.file.mimetype,
                                data: base64Audio
                            }
                        }
                    ]
                }
            ]
        });

        res.json({
            success: true,
            result: response.text
        });
    } catch (error) {
        next(error);
    }
};



module.exports = { generateText, generateImage, generateAudio, generateDocument };
