import * as aboutService from "./about.service.js";
import express, { Router } from "express";

const router = Router();

router.get("/", aboutService.getAboutSection);

router.post("/create", aboutService.createAboutSection);
router.put("/update", aboutService.updateAboutSection);

export default router;
