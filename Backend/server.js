const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

dotenv.config({ path: "./config/.env" });

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
