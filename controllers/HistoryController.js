const { User, History } = require("../models");
const { Op } = require("sequelize");
const moment = require("moment");

module.exports = {
  async index(req, res) {
    const user = await User.findByPk(req.user.id);
    let histories = [];

    if (user) {
      const sevenDaysAgo = moment().subtract(7, "days").toDate();
      histories = await History.findAll({
        where: {
          user_id: req.user.id,
          date: {
            [Op.gte]: sevenDaysAgo,
          },
        },
        order: [["date", "DESC"]],
      });
    }

    // res.json(history);
    res.render("history", {
      user: req.user,
      histories: histories,
    });
  },
};
