require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
// const expressEjsLayouts = require("express-ejs-layouts");
const router = require("./routes/index");

const app = express();
const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "geeksforgeeks",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(flash());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// app.use(expressEjsLayouts);
app.use(router);

app.listen(port, () => {
  console.log(`Server in running http://127.0.0.1:${port}`);
});
