const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    const filename = `Image-${Date.now()}-${file.originalname}`;
    callback(null, filename);
  },
}); //Physical Storage

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(
      new Error(
        "Please upload file with following extension - .jpg, .jpeg, .png "
      )
    );
  }
};
const multerConfig = multer({
  storage,
  fileFilter,
});
module.exports = multerConfig;
