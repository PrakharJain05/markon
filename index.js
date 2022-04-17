const fastify = require("fastify")({
  logger: true,
});

const uri =
  "mongodb+srv://prakharj05:Prakhar%4012@cluster0.4qkew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

fastify.register(require("fastify-mongodb"), {
  forceClose: true,
  url: uri,
});

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
