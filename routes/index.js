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
  class L2 {
    static className = "L2";

    constructor(config) {
      return tf.regularizers.l1l2(config);
    }
  }
  tf.serialization.registerClass(L2);

  const model = await tf.loadLayersModel(
    "https://storage.googleapis.com/models_nutrigie2/models/output_breakfast/model.json"
  );
  // return res.send(model.summary());

  const x = [
    23, 0, 0.7, 0.5, 2, 0, 0, 1, 0, 0, 0, 0.8, 0.9, 0.1, 0.2, 0.1, 0.1, 0.21,
    0.44, 0.66, 0.55, 0.1, 1, 0.3, 0.5, 0.6, 0, 1,
  ];
  const inputShape = [1, 28];
  // const inputShape = model.input[0].shape;

  // const inputData = tf.tensor2d(x, inputShape);
  // const predictions = model.predict(inputData);
  // const predictionsArray = predictions.arraySync();
  // res.send(predictionsArray);\

  const inputData = tf.tensor2d(x, inputShape);
  const predictions = model.predict(inputData);
  const topK = tf.topk(predictions, 3); // Get the top 3 predictions

  const values = topK.values.arraySync(); // Convert top values to array
  const indices = topK.indices.arraySync(); // Convert top indices to array

  const topPredictions = [];
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const index = indices[i];
    topPredictions.push({ value, index });
  }

  res.send(topPredictions);
});

module.exports = router;
