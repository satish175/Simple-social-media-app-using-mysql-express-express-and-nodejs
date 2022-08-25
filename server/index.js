const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const userRoute = require("./routes/User");
app.use("/user", userRoute);
const uploadRoute = require("./routes/Upload");
app.use("/upload", uploadRoute);
app.listen(3001, (req, res) => {
  console.log("server running...");
});
