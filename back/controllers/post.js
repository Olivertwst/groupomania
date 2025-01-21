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
      userReads: [],
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
        error: error.message
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
        error: error.message
      });
    }
  );
};

exports.postRead = (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.body;

  Post.findOne({ where: { id } })
    .then((post) => {
      if (!post) {
        // If post not found, return an error response
        return res.status(404).json({
          message: 'Post not found',
        });
      }

      // Check if userID is already in the reads array
      if (post.userReads && post.userReads.includes(userId)) {
        // If userID already exists, do nothing and return a message
        return res.status(200).json({
          message: 'User has already read this post',
        });
      }

      // If userID is not in the reads array, add it
      post.userReads = [...post.userReads, userId];
      // jane.role = [...jane.role, 'admin'];

      post.save().then(() => {
        // After saving, send a success response
        res.status(200).json({
          message: 'Post marked as read!',
        });
      });
    })
    .catch(
      (error) => {
        res.status(400).json({
          error: error.message
        });
      }
    );
};