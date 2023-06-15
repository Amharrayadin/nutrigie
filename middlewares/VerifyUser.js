require("dotenv").config();

const { User } = require("../models");

module.exports = {
  async auth(req, res, next) {
    if (req.session.isLogin == null) {
      req.session.destroy();
      return res.redirect("/login");
    }

    const user = await User.findByPk(req.session.userId);
    req.user = user;
    next();
  },

  guest(req, res, next) {
    if (!req.session.isLogin || req.session.isLogin == null) {
      next();
      return;
    }
    res.redirect("/");
  },

  isAdmin(req, res, next) {
    if (req.user.role == "admin") return next();
    return res.sendStatus(401);
  },

  isUser(req, res, next) {
    if (req.user.role == "user") return next();
    return res.sendStatus(401);
  },
};
