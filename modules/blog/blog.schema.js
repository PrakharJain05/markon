const post = {
  type: "object",
  properties: {
    id: { type: "number" },
    title: { type: "string" },
    body: { type: "string" },
  },
};

const getBlogSchema = {
  response: {
    200: {
      type: "array",
      items: post,
    },
  },
};
const getBlogByIdSchema = {
  params: {
    id: { type: "number" },
  },
  response: {
    200: post,
  },
};
const createBlogSchema = {
  body: {
    type: "object",
    required: ["title", "body"],
    properties: {
      title: { type: "string" },
      body: { type: "string" },
      html: { type: "string" },
    },
  },
  response: {
    200: { type: "string" },
  },
};
const updateBlogSchema = {
  body: {
    type: "object",
    required: ["title", "body"],
    properties: {
      title: { type: "string" },
      body: { type: "string" },
      html: { type: "string" },
    },
  },
  params: {
    id: { type: "number" },
  },
  response: {
    200: { type: "string" },
  },
};
const deleteBlogSchema = {
  params: {
    id: { type: "number" },
  },
  response: {
    200: { type: "string" },
  },
};

module.exports = {
  getBlogSchema,
  getBlogByIdSchema,
  createBlogSchema,
  updateBlogSchema,
  deleteBlogSchema,
};
