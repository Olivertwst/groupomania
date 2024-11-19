const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer');


router.get('/', auth, postCtrl.findAll);
router.post('/', auth, multer, postCtrl.createPost);
router.get('/:id', auth, postCtrl.findOne);
//TODO ADD ROUTE FOR MARKING POST AS READ.

module.exports = router;
