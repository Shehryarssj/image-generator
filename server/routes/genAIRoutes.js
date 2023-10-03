import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/image/generation",
      headers: {
        authorization: `Authorization: Bearer ${process.env.EDEN_API_KEY}`,
      },
      data: {
        show_original_response: false,
        fallback_providers: "openai",
        providers: "stabilityai",
        text: prompt,
        resolution: "512x512",
      },
    };
    const response = await axios.request(options);
    const provider = Object.keys(response.data)[0];
    const data = response.data[provider];
    if (data.status === "fail") {
      console.log(data);
      throw data.error.message;
    }
    const image = response.data[provider].items[0].image;
    res.status(200).json({ image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
