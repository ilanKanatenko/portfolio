import "dotenv/config.js";
import express from "express";
import passport from "passport";
import "./models/User.js";
import "./services/passport.js";
import { authRoutes } from "./routes/authRoutes.js";
import mongoose from "mongoose";
import expressSession from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import "./services/sendMail.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// express app initialization
const app = express();
app.use(
  expressSession({
    secret: "keyboard cat",
    saveUninitialized: true,
    maxAge: 200,
  })
);

// express passport initialization
app.use(passport.initialize());
app.use(passport.session());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// initiate the application routes
authRoutes(app);

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "dev";
}

app.post("/api/send_mail", (req, res) => {
  console.log("send mail express ", req.body);
  res.sendStatus(200);
});

app.get("/api/download_resume", (req, res) => {
  console.log(__dirname);
  const options = {
    headers: {
      "content-type": "application/octet-stream",
    },
  };
  // res.setHeader("content-type", "download_me");
  // res.set("Content-Disposition", "attachment;filename=ilan-kanatenko-cv.pdf");
  // res.set("Content-Type", "application/octet-stream");
  // res.download(`${__dirname}/projectFiles/ilan-kanatenko-cv.pdf`);
  res.sendFile(`${__dirname}/projectFiles/ilan-kanatenko-cv.pdf`, options);
  // res.type("application/octet-stream");
  // res.attachment("ilan-kanatenko-cv.pdf");
  // res.send();
});

if (process.env.NODE_ENV === "production") {
  //express will serve up production assets
  app.use(express.static("client/build"));
  //   //express will serve up the index.html

  app.get("*", (req, res) => {
    console.log("proxy section", __dirname, process.env);
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// app.get("/", (req, res) => {
//   console.log("Cookies: ", req.user);
//   res.cookie("name", "asdasd").send(process.env);
//   //asdasd
// });

const port = process.env.PORT || 5000;

app.listen(port);
