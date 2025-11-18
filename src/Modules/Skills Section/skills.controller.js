import express, { Router } from "express";
import * as skillsServices from "./skills.service.js";
import { upload } from "../../utils/file uploading/multer.js";
const router = Router();

router.get("/", skillsServices.getSkills);
router.post("/create", upload().single("icon"), skillsServices.createSkill);
router.delete("/delete/:id", skillsServices.deleteSkill);

export default router;
