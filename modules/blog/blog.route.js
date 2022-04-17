const {
  getBlogController,
  getBlogByIdController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
} = require("./blog.controller");
const {
  getBlogSchema,
  getBlogByIdSchema,
  createBlogSchema,
  updateBlogSchema,
  deleteBlogSchema,
} = require("./blog.schema");

const getBlogOpts = {
  schema: getBlogSchema,
  handler: getBlogController,
};
const getBlogByIdOpts = {
  schema: getBlogByIdSchema,
  handler: getBlogByIdController,
};
const creteBlogOpts = {
  schema: createBlogSchema,
  handler: createBlogController,
};
const updateBlogOpts = {
  schema: updateBlogSchema,
  handler: updateBlogController,
};
const deleteBlogOpts = {
  schema: deleteBlogSchema,
  handler: deleteBlogController,
};

const routes = (fastify, options, done) => {
  fastify.get("/api/blogs", getBlogOpts);
  fastify.get("/api/blog/:id", getBlogByIdOpts);
  fastify.post("/api/blog", creteBlogOpts);
  fastify.put("/api/blog/:id", updateBlogOpts);
  fastify.delete("/api/blog/:id", deleteBlogOpts);

  done();
};

module.exports = routes;
