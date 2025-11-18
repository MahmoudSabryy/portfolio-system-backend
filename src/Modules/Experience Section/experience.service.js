import experienceSectionModel from "../../DB/Models/experience.model.js";

export const getExpSection = async (req, res) => {
  try {
    const experienceSection = await experienceSectionModel.find();
    if (!experienceSection)
      return res
        .status(200)
        .json({ message: "This section is empty please fill it" });
    return res
      .status(200)
      .json({ message: "education Section found", experienceSection });
  } catch (error) {
    res.status(400).json({ message: "Failed", error: error.message });
  }
};

export const createExpSection = async (req, res) => {
  try {
    const expSection = await experienceSectionModel.create({
      section: {
        second: `training-date =>Jul 2022 – Aug 2022`,
        first: `UI & UX Design`,
        third: `OSC | FCIS Ain Shams University`,
      },
    });
    if (!expSection) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: "success", expSection });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

export const updateExpSection = async (req, res) => {
  try {
    const updatedExp = await experienceSectionModel.findOneAndUpdate(
      { ides: req.body.ides },
      {
        section: {
          first: req.body?.section.first,
          second: req.body?.section.second,
          third: req.body?.section.third,
        },
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: `Projects updated successfully`, updatedExp });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

export const deleteExpSection = async (req, res) => {
  try {
    const { ides } = req.params;

    const deleted = await experienceSectionModel.findOneAndDelete({ ides });

    if (!deleted) return res.status(400).json({ message: "Project not found" });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};
