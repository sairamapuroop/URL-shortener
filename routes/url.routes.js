import { Router } from "express";

import {generateNewShortURL, handleGetAnalytics} from "../controllers/url.controller.js";

const router = Router();

router.route("/").post(generateNewShortURL);

router.route("/analytics/:shortId").get(handleGetAnalytics);


export default router;





