const functions = require("firebase-functions");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors")({ origin: true });

// 🔥 도매꾹 상품 URL에서 og:image 자동 추출
exports.getOgImage = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const url = req.query.url;

    if (!url) {
      return res.status(400).json({ error: "Missing URL" });
    }

    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const ogImage = $('meta[property="og:image"]').attr("content");

      if (ogImage) {
        res.json({ imageUrl: ogImage });
      } else {
        res.status(404).json({ error: "No og:image found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch OG data", details: err.message });
    }
  });
});
