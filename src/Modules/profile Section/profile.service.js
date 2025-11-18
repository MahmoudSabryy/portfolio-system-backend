import profileSectionModel from "../../DB/Models/profile.model.js";

export const getProfileSection = async (req, res) => {
  try {
    const profileSection = await profileSectionModel.findOne();
    if (!profileSection)
      return res
        .status(200)
        .json({ message: "This section is empty please fill it" });
    return res
      .status(200)
      .json({ message: "Profile Section found", profileSection });
  } catch (error) {
    res.status(400).json({ message: "Failed", error: error.message });
  }
};

export const createProfileSection = async (req, res) => {
  try {
    const profileExist = await profileSectionModel.findOne();
    if (profileExist)
      return res.status(400).json({ message: "Profile Data aleady exist" });
    const profileSection = await profileSectionModel.create({
      id: 1,
      image: "../../../../Frontend/assetts/icons/GitHub.png",
      section1: {
        first: "Hello, I'm",
        second: "Mahmoud Mohamed Sabry",
      },
      section2: {
        first: "A Passionate",
        second: "MEAN Stack Web Developer",
      },
      section3: {
        first: "I specialize in building full-stack web applications using the",
        second: "MEAN stack",
        third: ` — MongoDB, Express.js, Angular, and
            Node.js. I focus on creating scalable, high-performance, and
            user-friendly digital experiences from backend logic to frontend
            interactivity.`,
      },
    });
    return res.status(201).json({ message: "success", profileSection });
  } catch (error) {
    return res.status(400).json({ message: "Failed", error: error.message });
  }
};

export const updateProfileSection = async (req, res) => {
  try {
    const { section1, section2, section3 } = req.body;
    const profileExist = await profileSectionModel.findOne();
    if (!profileExist)
      return res.status({ message: "Failed to read the data" });

    const updatedProfile = await profileSectionModel.findOneAndUpdate(
      { id: 1 },
      {
        $set: {
          "section1.first": section1?.first,
          "section1.second": section1?.second,
          "section2.first": section2?.first,
          "section2.second": section2?.second,
          "section3.first": section3?.first,
          "section3.second": section3?.second,
          "section3.third": section3?.third,
        },
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Profile Updated Successfully", updatedProfile });
  } catch (error) {
    return res.status(400).json({ message: "Failed", error: error.message });
  }
};

export const updateProfileImage = async (req, res) => {
  try {
    const imagePath = `http://localhost:3000/uploads/${req.file.filename}`;
    const profileImage = await profileSectionModel.findOneAndUpdate(
      { id: 1 },

      { image: imagePath },

      { new: true }
    );

    return res.status(200).json({
      message: "Photo updated successfully",
      newProfileUrl: profileImage.image,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to upload the image", error: error.message });
  }
};
