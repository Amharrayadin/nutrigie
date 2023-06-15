module.exports = {
  index(req, res) {
    res.render("history", {
      user: req.user,
    });
  },
};
