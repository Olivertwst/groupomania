const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer');


router.get('/', auth, postCtrl.findAll);
router.post('/', auth, multer, postCtrl.createPost);
// TODO ADD ROUTE FORGETTING ONE POST SEE PJ 6 FOR GETTING ONE SAUCE

module.exports = router;
