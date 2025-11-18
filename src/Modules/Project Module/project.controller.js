import express, { Router } from "express";

import * as projectServices from "./project.service.js";

const router = Router();

router.get("/", projectServices.getProjectSection);
router.post("/create", projectServices.createProjectSection);
// router.post("/search", projectServices.searchProjectSection);
router.put("/update", projectServices.updateProjectSection);
router.delete("/delete/:id", projectServices.deleteProjectSection);
export default router;
