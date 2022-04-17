const blogs = require("../../blogs");

const getBlogController = (req, reply) => {
  reply.send(blogs);
};
const getBlogByIdController = (req, reply) => {
  const { id } = req.params;

  const blog = blogs.filter((blog) => {
    return blog.id === id;
  })[0];

  if (!blog) {
    reply.status(404).send({
      errorMsg: "Post not found",
    });
  }

  reply.send(blog);
};
const createBlogController = (req, reply) => {
  const { title, body } = req.body;

  const id = blogs.length + 1;
  blogs.push({ id, title, body });

  reply.send("Blog added");
};
const updateBlogController = (req, reply) => {
  const { title, body } = req.body;
  const { id } = req.params;

  const blog = blogs.filter((blog) => {
    return blog.id === id;
  })[0];

  if (!blog) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  blog.title = title;
  blog.body = body;

  return reply.send("Blog updated");
};
const deleteBlogController = (req, reply) => {
  const { id } = req.params;

  const blogIndex = blogs.findIndex((blog) => {
    return blog.id === id;
  });

  if (blogIndex === -1) {
    return reply.status(404).send(new Error("Post doesn't exist"));
  }

  blogs.splice(blogIndex, 1);

  return reply.send("Blog deleted");
};

module.exports = {
  getBlogController,
  getBlogByIdController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
};
