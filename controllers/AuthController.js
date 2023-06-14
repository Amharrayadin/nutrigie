module.exports = {
  index(req, res) {
    res.render("profile");
  },

  login(req, res) {
    res.render("auth/login");
  },

  register(req, res) {
    // res.send("koeeko");
    res.render("auth/register");
  },
};
