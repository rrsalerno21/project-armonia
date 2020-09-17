const mongoose = require("mongoose");

const mongoUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/armoniaDB";

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

module.exports = () => {
  return mongoose
    .connect(mongoUri, dbOptions)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.error(err));
};
