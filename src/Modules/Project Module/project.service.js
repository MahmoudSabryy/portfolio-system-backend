import projectSectionModel from "../../DB/Models/project.model.js";

export const getProjectSection = async (req, res) => {
  try {
    const projectSection = await projectSectionModel.find();
    if (!projectSection)
      return res
        .status(404)
        .json({ message: "This section is empty please fill it" });
    return res
      .status(200)
      .json({ message: "Project Section found", projectSection });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

export const createProjectSection = async (req, res) => {
  try {
    const projectSection = await projectSectionModel.create({
      projectName: req.body.projectName || `Saraha Application`,

      projectDesc:
        req.body.projectDesc ||
        `  Anonymous messaging platform allowing users to send and receive private messages securely.`,

      toolsData: req.body.toolsData || ` Node.js, Express.js, MongoDB, EJS`,

      link: req.body.link || `View Project`,
    });

    return res.status(201).json({ message: "success", projectSection });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

export const updateProjectSection = async (req, res) => {
  try {
    const updatedProject = await projectSectionModel.findOneAndUpdate(
      { id: req.body.id },
      {
        projectName: req.body?.projectName,
        projectDesc: req.body?.projectDesc,
        toolsData: req.body?.toolsData,
        link: req.body?.link,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: `Projects updated successfully`, updatedProject });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

export const deleteProjectSection = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await projectSectionModel.findOneAndDelete({ id });

    if (!deleted) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

// export const searchProjectSection = async (req, res) => {
//   try {
//     const { searchInput } = req.body;
//     const allProjects = await projectSectionModel.find();

//     if (!allProjects || allProjects.length === 0)
//       return res.status(404).json({ message: "Project not found" });
//     const searchedProject = allProjects.filter((p) =>
//       p.projectName.toLowerCase().includes(searchInput.toLowerCase())
//     );

//     if (searchedProject.length == 0)
//       return res.status(404).json({ message: "Project not found" });
//     return res.status(200).json({ message: "found", searchedProject });
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ message: "Failed to retreive the Data", error: error.message });
//   }
// };
