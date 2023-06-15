const { User } = require("../models");
const bycrypt = require("bcrypt");

module.exports = {
  async allUser(req, res) {
    const data = await User.findAll();
    res.json({ data });
  },

  index(req, res) {
    res.render("profile", {
      user: req.user,
    });
  },

  login(req, res) {
    res.render("auth/login", {
      error: req.flash("error"),
      success: req.flash("success"),
    });
  },

  async loginProcess(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        req.flash("error", "Email tidak ditemukan.");
        return res.redirect("/login");
      }

      const match = await bycrypt.compare(password, user.password);
      if (!match) {
        req.flash("error", "Password Anda salah.");
        return res.redirect("/login");
      }

      req.session.isLogin = "true";
      req.session.userId = user.id;
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  register(req, res) {
    res.render("auth/register");
  },

  async registerProcess(req, res) {
    const { username, email, password } = req.body;
    const salt = await bycrypt.genSalt();
    const hashPassword = await bycrypt.hash(password, salt);

    try {
      await User.create({
        username: username,
        email: email,
        password: hashPassword,
      });

      req.flash("success", "Register berhasil.");
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  },

  async logout(req, res) {
    req.session.destroy();

    return res.redirect("/login");
  },

  async updateProfile(req, res) {
    const user = await User.findOne({
      where: { id: req.params.id },
    });

    await user.set({
      username: req.body.username,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age,
      job: req.body.job,
      height: req.body.height,
      weight: req.body.weight,
      activity: req.body.activity,
      breakfast_min_price: req.body.breakfast_min_price,
      breakfast_max_price: req.body.breakfast_max_price,
      breakfast_salty: req.body.breakfast_salty,
      breakfast_sweet: req.body.breakfast_sweet,
      breakfast_sour: req.body.breakfast_sour,
      breakfast_savory: req.body.breakfast_savory,
      breakfast_spicy: req.body.breakfast_spicy,
      breakfast_crispy: req.body.breakfast_crispy,
      breakfast_smooth: req.body.breakfast_smooth,
      breakfast_creamy: req.body.breakfast_creamy,
      breakfast_thick: req.body.breakfast_thick,
      breakfast_fried: req.body.breakfast_fried,
      breakfast_boiled: req.body.breakfast_boiled,
      breakfast_grilled: req.body.breakfast_grilled,
      breakfast_steamed: req.body.breakfast_steamed,
      breakfast_fastfood: req.body.breakfast_fastfood,
      breakfast_store_bought: req.body.breakfast_store_bought,
      lunch_min_price: req.body.lunch_min_price,
      lunch_max_price: req.body.lunch_max_price,
      lunch_salty: req.body.lunch_salty,
      lunch_sweet: req.body.lunch_sweet,
      lunch_sour: req.body.lunch_sour,
      lunch_savory: req.body.lunch_savory,
      lunch_spicy: req.body.lunch_spicy,
      lunch_crispy: req.body.lunch_crispy,
      lunch_smooth: req.body.lunch_smooth,
      lunch_creamy: req.body.lunch_creamy,
      lunch_thick: req.body.lunch_thick,
      lunch_fried: req.body.lunch_fried,
      lunch_boiled: req.body.lunch_boiled,
      lunch_grilled: req.body.lunch_grilled,
      lunch_steamed: req.body.lunch_steamed,
      lunch_fastfood: req.body.lunch_fastfood,
      lunch_store_bought: req.body.lunch_store_bought,
      dinner_min_price: req.body.dinner_min_price,
      dinner_max_price: req.body.dinner_max_price,
      dinner_salty: req.body.dinner_salty,
      dinner_sweet: req.body.dinner_sweet,
      dinner_sour: req.body.dinner_sour,
      dinner_savory: req.body.dinner_savory,
      dinner_spicy: req.body.dinner_spicy,
      dinner_crispy: req.body.dinner_crispy,
      dinner_smooth: req.body.dinner_smooth,
      dinner_creamy: req.body.dinner_creamy,
      dinner_thick: req.body.dinner_thick,
      dinner_fried: req.body.dinner_fried,
      dinner_boiled: req.body.dinner_boiled,
      dinner_grilled: req.body.dinner_grilled,
      dinner_steamed: req.body.dinner_steamed,
      dinner_fastfood: req.body.dinner_fastfood,
      dinner_store_bought: req.body.dinner_store_bought,
      snack_min_price: req.body.snack_min_price,
      snack_max_price: req.body.snack_max_price,
      snack_salty: req.body.snack_salty,
      snack_sweet: req.body.snack_sweet,
      snack_sour: req.body.snack_sour,
      snack_savory: req.body.snack_savory,
      snack_spicy: req.body.snack_spicy,
      snack_crispy: req.body.snack_crispy,
      snack_smooth: req.body.snack_smooth,
      snack_creamy: req.body.snack_creamy,
      snack_thick: req.body.snack_thick,
      snack_fried: req.body.snack_fried,
      snack_boiled: req.body.snack_boiled,
      snack_grilled: req.body.snack_grilled,
      snack_steamed: req.body.snack_steamed,
      snack_fastfood: req.body.snack_fastfood,
      snack_store_bought: req.body.snack_store_bought,
    });
    user.save();

    // return res.json(user);
    res.redirect("/profile");
  },
};
