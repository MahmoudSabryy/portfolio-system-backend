import multer, { diskStorage } from "multer";

export const upload = () => {
  // 1- disk storage

  const storage = diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });

  const multerUpload = multer({ storage });
  return multerUpload;
};
