module.exports = {
  index(req, res) {
    res.render("home", {
      user: req.user,
    });
  },
};
