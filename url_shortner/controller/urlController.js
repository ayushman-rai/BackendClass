const urlModel = require('../models/urlModel');
const { nanoid } = require('nanoid');

async function generateUrl(req, res) {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "URL is mandatory" });
    }

    try {
        const shortId = nanoid(8);

        await urlModel.create({
            shortUrl: shortId,
            actualUrl: url,
            visitRecord: []
        });

        return res.json({
            shortUrl: shortId
        });

    } catch (error) {
        return res.status(500).json({ error: "Server Error" });
    }
}

module.exports = generateUrl;