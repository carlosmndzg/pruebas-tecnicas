import { Router } from "express";
import { getItem, getItems } from "../controllers/items.controllers.js";

const router = Router();

router.route("/").get(getItems);
router.route("/:id").get(getItem);

export default router;
