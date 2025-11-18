import skillSectionModel from "../../DB/Models/skills.model.js";

export const getSkills = async (req, res) => {
  try {
    const skills = await skillSectionModel.find();
    if (!skills) return res.status(404).json({ message: "No skills to show" });
    return res.status(200).json(skills);
  } catch (error) {
    return res.status(500).json({ error: "Server Error" }, error.message);
  }
};

export const createSkill = async (req, res) => {
  try {
    const createdSkill = await skillSectionModel.create({
      name: req?.body?.name,
      icon: req?.file?.filename,
    });
    return res.status(201).json({ createdSkill });
  } catch (error) {
    return res.status(500).json({ error: "Server Error" }, error.message);
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await skillSectionModel.findOneAndDelete({
      ids: Number(id),
    });
    if (!deleted) return res.status(404).json({ message: "Skill not found" });
    return res.status(200).json({ message: "Deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Server Error" }, error.message);
  }
};
