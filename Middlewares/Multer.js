const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Uploads directory
    },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// console.log(storage);
const upload = multer({
    storage, 
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if (mimeType && extname) {
            return cb(null, true);
        }
        cb(new Error('Only image files are allowed!'));
    }
});

module.exports = upload;