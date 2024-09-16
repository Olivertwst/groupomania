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
    console.log(req.body)
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
        // FIXME get this to work for post without media
      post = {
        userId: parsedPost.userId,
        title: parsedPost.title,
        content: parsedPost.content,
      };
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
