import { Router } from "express";
import * as experienceService from "./experience.service.js";
const router = Router();

router.get("/", experienceService.getExpSection);
router.post("/create", experienceService.createExpSection);
router.delete("/delete/:ides", experienceService.deleteExpSection);
router.put("/update", experienceService.updateExpSection);
// router.put("/update", experienceService.updateProfileSection);
// router.patch(
//   "/updateimage",
//   upload().single("image"),
//   profileService.updateProfileImage
// );

export default router;
