import { Router } from "express";
import * as profileService from "./profile.service.js";
import { upload } from "../../utils/file uploading/multer.js";
const router = Router();

router.get("/", profileService.getProfileSection);
router.post("/create", profileService.createProfileSection);
router.put("/update", profileService.updateProfileSection);
router.patch(
  "/updateimage",
  upload().single("image"),
  profileService.updateProfileImage
);

export default router;
