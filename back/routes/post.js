const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postCtrl = require('../controllers/post');

router.get('/', auth, postCtrl.findAll);

module.exports = router;
