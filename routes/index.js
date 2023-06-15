// tensorflow tjs
const tf = require("@tensorflow/tfjs");

// import router
const router = require("express").Router();

// import controller & middleware
const HomeController = require("../controllers/HomeController");
const DashboardController = require("../controllers/DashboardController");
const AuthController = require("../controllers/AuthController");
const HistoryController = require("../controllers/HistoryController");
const VerifyUser = require("../middlewares/VerifyUser");

// home route
router.get("/", VerifyUser.auth, HomeController.index);
router.get("/dashboard", VerifyUser.auth, DashboardController.index);

// route profile
router.get("/profile", VerifyUser.auth, AuthController.index);
router.put(
  "/profile/update/:id",
  VerifyUser.auth,
  AuthController.updateProfile
);

// route history
router.get("/history", VerifyUser.auth, HistoryController.index);

// login route
router.get("/login", VerifyUser.guest, AuthController.login);
router.post("/login", VerifyUser.guest, AuthController.loginProcess);
router.get("/register", VerifyUser.guest, AuthController.register);
router.get("/logout", VerifyUser.auth, AuthController.logout);

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

  const inputData = tf.tensor2d(x, inputShape);
  const predictions = model.predict(inputData);
  res.send(predictions);
});

module.exports = router;
