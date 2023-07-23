const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
