const multer = require('multer');
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'video/mp4': 'mp4',
    'audio/mp3': 'mp3',
    'audio/mpeg': 'mp3',
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'media');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage: storage }).single('media');