// tensorflow tjs
const tf = require("@tensorflow/tfjs");

// import model
const model1 = require("../models/model1.json");

// import router
const router = require("express").Router();

// import controller & middleware
const HomeController = require("../controllers/HomeController");
const DashboardController = require("../controllers/DashboardController");
const AuthController = require("../controllers/AuthController");
const HistoryController = require("../controllers/HistoryController");

// home route
router.get("/", HomeController.index);
router.get("/dashboard", DashboardController.index);
router.get("/profile", AuthController.index);
router.get("/history", HistoryController.index);

// login route
router.get("/login", AuthController.login);
router.get("/register", AuthController.register);

router.get("/coba", async (req, res) => {
  // const model = await tf.loadLayersModel("https://storage.cloud.google.com/nutrigie_models/model/output_breakfast/model.json");
  // const model = await tf.loadLayersModel("https://storage.googleapis.com/nutrigie_models/model/output_breakfast/model.json");

  const model = await tf.loadLayersModel("https://storage.googleapis.com/nutrigie_models/model/output_breakfast/breakfast2.json");
  return res.send(model.summary());

  // const inputData = tf.tensor2d([23, 0, 0.7, 0.5, 2, 0, 0, 1, 0, 0, 0, 0.8, 0.9, 0.1, 0.2, 0.1, 0.1, 0.21, 0.44, 0.66, 0.55, 0.1, 1, 0.3, 0.5, 0.6, 0, 1]);
  // const predictions = model.predict(inputData);

  res.json({ msg: "sss" });
});

module.exports = router;
