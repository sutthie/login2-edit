const createError = require("http-errors");
const express = require("express");
// require("dotenv").config();
// require("dotenv").config({ path: "./.env" });
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "build")));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", indexRouter);

app.get("/loaduser", (req, res) => {
  try {
    const dataJSONStr = fs.readFileSync("./data_json.json");
    const person = JSON.parse(dataJSONStr);

    console.log("Load Data JSON ....");
    console.log(person);

    res.json(person);
  } catch (err) {
    console.log(err);
    res.json(err);
    // return;
  }
});

// app.get("*", (req, res) => {
app.get("/", (req, res) => {
  res.sendFile("build/index.html", { root: __dirname });
});

app.post("/ChkLogin", (req, res) => {
  // console.log(
  //   "My Key : " + process.env.MY_KEY + " , MY Comp : " + process.env.MY_COMP
  // );
  // console.log("\nusername : " + req.body.username + "\n");
  if (req.body.username === "sutthie") {
    const ret = {
      status: true,
      token: "1234567890",
      firstname: "Sutthie",
      lastname: "Jullaka",
    };
    console.log("\nData Login : " + ret);

    res.json(ret);
  } else res.json({ status: false });

  // console.log(req.body.title);
  // res.json({ result: req.body.title });
  //res.json({ data: JSON.parse(req.body.title) });
});

app.post("/AddUser", (req, res) => {
  console.log("\nusername : " + req.body.username);
  console.log("\npassword : " + req.body.password);
  console.log("\nfirstname : " + req.body.firstname);
  console.log("\nlastname : " + req.body.lastname);
  //res.json(req.body);
  res.json({ status: true });
  // res.json({ result: req.body.title });
  //res.json({ data: JSON.parse(req.body.title) });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// TODO Web Template Studio: Add your own error handler here.
if (process.env.NODE_ENV === "production") {
  // Do not send stack trace of error message when in production
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send("Error occurred while handling the request.");
  });
} else {
  // Log stack trace of error message while in development
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.send(err.message);
  });
}

module.exports = app;
