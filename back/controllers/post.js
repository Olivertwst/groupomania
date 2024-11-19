const fs = require('fs');
const { Post } = require('../models');
exports.findAll = (req, res, next) => {
  const posts = Post.findAll().then((posts) => {
    res.status(200).json(
      posts
    );
  });

}

exports.createPost = async (req, res, next) => {
  let post
  if (req.file) {
    const parsedPost = JSON.parse(req.body.post);
    const url = req.protocol + '://' + req.get('host');
    post = Post.build({
      userId: parsedPost.userId,
      title: parsedPost.title,
      content: parsedPost.content,
      usersRead: [],
      mediaUrl: url + '/media/' + req.file.filename,
    });
  } else {
    const parsedPost = req.body;
    post = Post.build({
      userId: parsedPost.userId,
      title: parsedPost.title,
      content: parsedPost.content,
    });
  }


  post.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

exports.findOne = (req, res, next) => {
  Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};