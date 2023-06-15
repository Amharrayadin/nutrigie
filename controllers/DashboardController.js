module.exports = {
  index(req, res) {
    res.render("dashboard", {
      user: req.user,
    });
  },
};
