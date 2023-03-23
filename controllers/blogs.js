const blogRouter = require('express').Router();
const Blog = require('../models/blog')

//get the blogs
blogRouter.get('/api/blogs', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
//save a new blog
blogRouter.post('/api/blogs', (request, response) => {
    const blog = new Blog(request.body)
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
})

module.exports = blogRouter;