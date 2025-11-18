import express, { Router } from "express";

import * as educationServices from "./education.service.js";

const router = Router();

router.get("/", educationServices.getEducationSection);
router.post("/create", educationServices.createEducationSection);
router.put("/update", educationServices.updateEducationSection);
export default router;
