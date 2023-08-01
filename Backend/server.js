const app = require("./app.js");

const dotenv = require("dotenv");
const cors = require("cors");

const connectDatabase = require("./config/database");

//handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception");
  err.message = "Uncaught exception";
  process.exit(1);
});

dotenv.config({ path: "./config/.env" });

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

//unhandled promise rejection
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  err.message = "Unhandled exception";
  server.close(() => {
    process.exit(1);
  });
});

const corsOptions = {
  origin: "http://localhost:4000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
