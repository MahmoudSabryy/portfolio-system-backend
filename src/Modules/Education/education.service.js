import educationSectionModel from "../../DB/Models/Education.model.js";

export const getEducationSection = async (req, res) => {
  try {
    const educationSection = await educationSectionModel.findOne();
    if (!educationSection)
      return res
        .status(404)
        .json({ message: "This section is empty please fill it" });
    return res
      .status(200)
      .json({ message: "Education Section found", educationSection });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

export const createEducationSection = async (req, res) => {
  try {
    const educationExist = await educationSectionModel.findOne();

    if (educationExist)
      return res.status(200).json({ message: "Education Data aleady exist" });

    const educationSection = await educationSectionModel.create({
      id: 1,
      section: {
        first: `Bachelor's Degree in Computer Science`,
        second: `Sept 2019 – June 2023`,
        third: `Faculty of Computers and Information, Ain Shams University`,
      },
    });

    return res.status(201).json({ message: "success", educationSection });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

export const updateEducationSection = async (req, res) => {
  try {
    const { section } = req.body;
    const educationExist = await educationSectionModel.findOne();

    if (!educationExist)
      return res.status(404).json({ message: "Education Section not Found" });

    const updatedSection = await educationSectionModel.findOneAndUpdate(
      { id: 1 },
      {
        "section.first": section?.first,
        "section.second": section?.second,
        "section.third": section?.third,
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "About Section Updated Successfully", updatedSection });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update Education Section",
      error: error.message,
    });
  }
};
