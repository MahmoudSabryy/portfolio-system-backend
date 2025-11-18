import connectDB from "../src/DB/connection.js";
import cors from "cors";

import profileRouter from "./Modules/profile Section/profile.controller.js";
import aboutRouter from "./Modules/About Section/about.controller.js";
import educationRouter from "./Modules/Education/education.controller.js";
import projectRouter from "./Modules/Project Module/project.controller.js";
import skillsRouter from "./Modules/Skills Section/skills.controller.js";
import experienceRouter from "./Modules/Experience Section/experience.controller.js";
const bootstrap = async (app, express) => {
  app.use(cors());
  await connectDB();

  app.use(express.json());

  app.use("/profile", profileRouter);

  app.use("/about", aboutRouter);
  app.use("/education", educationRouter);
  app.use("/project", projectRouter);
  app.use("/skills", skillsRouter);
  app.use("/exp", experienceRouter);
  app.use("/uploads", express.static("uploads"));

  app.all(/.*/, (req, res) => {
    return res.status(404).json({ message: "Not Found Handler !!!" });
  });
};

export default bootstrap;
