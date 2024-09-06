const { Post } = require('../models');
exports.findAll = (req, res, next) => {
    const posts = Post.findAll().then((posts) => {
        res.status(200).json(
            posts
        );
    });

}