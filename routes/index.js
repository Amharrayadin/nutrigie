const { History, User } = require("../models");

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

router.get("/testes", async (req, res) => {
  const history = await History.findByPk(1);
  if (history) {
    const user = await history.getUser(); // Menggunakan getUser() untuk mendapatkan objek User terkait
    res.json(user);
  }
});

router.get("/usertes", async (req, res) => {
  const user = await User.findByPk(1);
  if (user) {
    const histories = await user.getHistories(); // Menggunakan getHistories() untuk mendapatkan riwayat terkait
    res.json(histories);
  }
});

// home route
router.get("/", VerifyUser.auth, HomeController.index);

//dashboard route
router.get("/dashboard", VerifyUser.auth, DashboardController.index);
router.post(
  "/dashboard/add-kalori",
  VerifyUser.auth,
  DashboardController.addKalori
);

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
router.post("/register", VerifyUser.guest, AuthController.registerProcess);
router.get("/logout", VerifyUser.auth, AuthController.logout);

module.exports = router;
