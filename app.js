const redis = require("redis");
const client = redis.createClient();

client.on("error", (error) => {
  console.error(error);
});

// SET
client.set("name", "deniz", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("Message", message);
});

// GET
client.get("name", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("Message", message);
});

// DELETE
client.del("name", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("Message", message);
});

// EXISTS
client.exists("name", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("Exists", message);
});

// APPEND
client.append("surname", "akpinar", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log("Append", message);
});

// SUBSCRIBE
client.on("message", (channel, message) => {
  console.log(`${channel} - ${message}`);
});

client.subscribe("channel1");
