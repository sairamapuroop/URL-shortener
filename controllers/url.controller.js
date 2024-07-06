import { nanoid } from "nanoid";
import { ApiResponse } from "../utils/ApiResponse.js";
import Url from "../models/url.model.js";

async function generateNewShortURL(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }

  const shortID = nanoid(8);
  await Url.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res
    .status(201)
    .json(new ApiResponse(201, { id: shortID }, "Generated short URL"));
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;

  if (shortId === null) {
    return res.status(400).json({ error: "ShortId is required" });
  }

  const result = await Url.findOne({
    shortId,
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      {
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
      },
      "Analytics sent successfully"
    )
  );
}

export { generateNewShortURL, handleGetAnalytics };
