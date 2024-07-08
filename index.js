import express from "express";
import dotenv from "dotenv";
import Url from "./models/url.model.js";

const app = express();
import { connectDB } from "./db/index.js";
import router from "./routes/url.routes.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB(`${process.env.MONGODB_URI}${process.env.DB_NAME}`)
  .then(console.log("MongoDB connected"))
  .catch((err) => {
    console.log("MONGODB connection FAILED !!! ", err);
  });

app.use(express.json());

app.use("/url", router);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectUrl);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
