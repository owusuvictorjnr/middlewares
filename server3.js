const express = require("express");
const userRouter = require("./routes/users.route");

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Welcome to my server, Please use /user to get all users");
});

app.use("/users", userRouter);

app.listen(4000, (err) => {
  console.log("Listening on " + 4000);
});
