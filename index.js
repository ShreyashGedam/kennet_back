const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");
const commentRouter = require("./routes/comment.route");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", userRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connetion to db success");
  } catch (error) {
    console.log(error.message);
  }
  console.log("listening to port");
});
