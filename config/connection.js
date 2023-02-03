const { connect, connection } = require("mongoose");

// node will look for this environment variable and if it exists, it will use it.
// otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

// connect to the Mongo DB using the connection string above
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
