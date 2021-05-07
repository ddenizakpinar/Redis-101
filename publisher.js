const redis = require("redis");
const client = redis.createClient();

client.on("error", (error) => {
  console.error(error);
});

// PUBLISH
client.publish("channel1", "message from publisher", (error, number) => {
  console.log(`${number}`);
});
