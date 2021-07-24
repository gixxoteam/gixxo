import dotenv from "dotenv";

dotenv.config();
const Database = {};

Database.mongodb = {
  uri:
    process.env.NODE_ENV === "development"
      ? "mongodb+srv://gixxo:<gixxo2021>@cluster0.sxytb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
      : "mongodb+srv://gixxo:<gixxo2021>@cluster0.sxytb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    user: "gixxo",
    pass: "gixxo2021",
  },
  optionsDeprecated: {
    db: {
      native_parser: true,
    },
    server: {
      poolSize: 5,
      socketOptions: {
        keepAlive: 120 * 1000,
        socketTimeoutMS: 0,
        connectionTimeout: 0,
      },
    },
  },
};

module.exports = Database;
