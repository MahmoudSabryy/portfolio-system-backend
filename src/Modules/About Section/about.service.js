import aboutSectionModel from "../../DB/Models/About.model.js";

export const getAboutSection = async (req, res) => {
  try {
    const aboutSection = await aboutSectionModel.findOne();
    if (!aboutSection)
      return res
        .status(404)
        .json({ message: "This section is empty please fill it" });

    return res
      .status(200)
      .json({ message: "About Section found", aboutSection });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

export const createAboutSection = async (req, res) => {
  try {
    const aboutExist = await aboutSectionModel.findOne();

    if (aboutExist)
      return res.status(200).json({ message: "Profile Data aleady exist" });

    const aboutSection = await aboutSectionModel.create({
      id: 1,
      section1: {
        first: `I'm a`,
        second: `MEAN Stack Developer`,
        third: ` passionate about building
          dynamic, responsive, and high-performance web applications. I develop
          both server-side and client-side features using`,
        fourth: `MongoDB, Express.js, Angular, and Node.js`,
        fifth: ` to deliver
          complete end-to-end solutions.`,
      },

      section2: {
        first: `I love crafting clean APIs, optimizing databases, and creating
          intuitive user interfaces that provide seamless digital experiences.
          Collaboration, performance, and scalability are always at the core of
          my development process.`,
      },
    });

    return res.status(201).json({ message: "success", aboutSection });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to retreive the Data", error: error.message });
  }
};

export const updateAboutSection = async (req, res) => {
  try {
    const { section1, section2 } = req.body;
    const aboutExist = await aboutSectionModel.findOne();

    if (!aboutExist)
      return res.status(404).json({ message: "About Section not Found" });

    const updatedSection = await aboutSectionModel.findOneAndUpdate(
      { id: 1 },
      {
        "section1.first": section1?.first,
        "section1.second": section1?.second,
        "section1.third": section1?.third,
        "section1.fourth": section1?.fourth,
        "section1.fifth": section1?.fifth,
        "section2.first": section2?.first,
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "About Section Updated Successfully", updatedSection });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update About Section",
      error: error.message,
    });
  }
};
