const fs = require('fs');
const { Post } = require('../models');
const { post } = require('../routes/post');
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

exports.postRead = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } }).then(() => {
    // TODO find if the userID from the request body is already in the reads array for the post.
    // if the userID is already in the reads array do nothing 
    // if the userID is not in the reads array add it in the reads array.
    res.status(200).json({
      message: 'Post has been read!'
    });
  }
  ).catch(
    (error) => {
      0
      console.log(exports.postRead)
      res.status(400).json({
        error: error.message
      });
    }
  );
};