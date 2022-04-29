const blogs = require("./blogs");
require("dotenv").config();

const fastify = require("fastify")({
  logger: true,
});

const uri = process.env.MONGO_URI;

fastify.register(require("fastify-mongodb"), {
  forceClose: true,
  url: uri,
});

const getRssFeed = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            html: { type: "string" },
          },
        },
      },
    },
  },
  handler: (req, reply) => {
    let feed = [];
    blogs.forEach((blog) => {
      if (blog.html) {
        feed.unshift({ html: blog.html });
      }
    });
    reply.send(feed);
  },
};

fastify.get("/feed", getRssFeed);

fastify.register(require("./modules/blog/blog.route"));

const start = async () => {
  try {
    await fastify.listen(3000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
