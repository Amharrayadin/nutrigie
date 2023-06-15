const { User, FoodsData } = require("../models");
const tf = require("@tensorflow/tfjs");
const math = require("mathjs");
const { Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    class L2 {
      static className = "L2";

      constructor(config) {
        return tf.regularizers.l1l2(config);
      }
    }
    tf.serialization.registerClass(L2);

    const breakfastModel = await tf.loadLayersModel(
      "https://storage.googleapis.com/models_nutrigie2/models/output_breakfast/model.json"
    );
    const lunchModel = await tf.loadLayersModel(
      "https://storage.googleapis.com/models_nutrigie2/models/output_lunch/model.json"
    );
    const dinnerModel = await tf.loadLayersModel(
      "https://storage.googleapis.com/models_nutrigie2/models/output_dinner/model.json"
    );
    const snackModel = await tf.loadLayersModel(
      "https://storage.googleapis.com/models_nutrigie2/models/output_snack/model.json"
    );

    const pekerjaan = {
      pekerjaan_mahasiswa: 0,
      pekerjaan_pns: 0,
      pekerjaan_polisi: 0,
      pekerjaan_siswa: 0,
      pekerjaan_staff: 0,
      pekerjaan_wirausaha: 0,
    };
    let gender = 0,
      activity = 0;
    if (req.user.job == "college student") pekerjaan.pekerjaan_mahasiswa = 1;
    if (req.user.job == "enterpreneur") pekerjaan.pekerjaan_wirausaha = 1;
    if (req.user.job == "pns") pekerjaan.pekerjaan_pns = 1;
    if (req.user.job == "police") pekerjaan.pekerjaan_polisi = 1;
    if (req.user.job == "staff") pekerjaan.pekerjaan_staff = 1;
    if (req.user.job == "student") pekerjaan.pekerjaan_siswa = 1;
    if (req.user.gender == "male") gender = 0;
    if (req.user.gender == "female") gender = 1;
    if (req.user.activity == "low") activity = 0;
    if (req.user.activity == "moderate") activity = 1;
    if (req.user.activity == "high") activity = 2;

    //NORMALISASI DATA
    const breakfastToNormalize = [
      req.user.breakfast_min_price,
      req.user.breakfast_max_price,
      req.user.height,
      req.user.weight,
      req.user.breakfast_salty,
      req.user.breakfast_sweet,
      req.user.breakfast_sour,
      req.user.breakfast_savory,
      req.user.breakfast_spicy,
      req.user.breakfast_crispy,
      req.user.breakfast_smooth,
      req.user.breakfast_creamy,
      req.user.breakfast_thick,
      req.user.breakfast_fried,
      req.user.breakfast_boiled,
      req.user.breakfast_grilled,
      req.user.breakfast_steamed,
      req.user.breakfast_fastfood,
      req.user.breakfast_store_bought,
    ];
    const lunchToNormalize = [
      req.user.lunch_min_price,
      req.user.lunch_max_price,
      req.user.height,
      req.user.weight,
      req.user.lunch_salty,
      req.user.lunch_sweet,
      req.user.lunch_sour,
      req.user.lunch_savory,
      req.user.lunch_spicy,
      req.user.lunch_crispy,
      req.user.lunch_smooth,
      req.user.lunch_creamy,
      req.user.lunch_thick,
      req.user.lunch_fried,
      req.user.lunch_boiled,
      req.user.lunch_grilled,
      req.user.lunch_steamed,
      req.user.lunch_fastfood,
      req.user.lunch_store_bought,
    ];
    const dinnerToNormalize = [
      req.user.dinner_min_price,
      req.user.dinner_max_price,
      req.user.height,
      req.user.weight,
      req.user.dinner_salty,
      req.user.dinner_sweet,
      req.user.dinner_sour,
      req.user.dinner_savory,
      req.user.dinner_spicy,
      req.user.dinner_crispy,
      req.user.dinner_smooth,
      req.user.dinner_creamy,
      req.user.dinner_thick,
      req.user.dinner_fried,
      req.user.dinner_boiled,
      req.user.dinner_grilled,
      req.user.dinner_steamed,
      req.user.dinner_fastfood,
      req.user.dinner_store_bought,
    ];
    const snackToNormalize = [
      req.user.snack_min_price,
      req.user.snack_max_price,
      req.user.height,
      req.user.weight,
      req.user.snack_salty,
      req.user.snack_sweet,
      req.user.snack_sour,
      req.user.snack_savory,
      req.user.snack_spicy,
      req.user.snack_crispy,
      req.user.snack_smooth,
      req.user.snack_creamy,
      req.user.snack_thick,
      req.user.snack_fried,
      req.user.snack_boiled,
      req.user.snack_grilled,
      req.user.snack_steamed,
      req.user.snack_fastfood,
      req.user.snack_store_bought,
    ];

    const minBreakfastValue = Math.min(...breakfastToNormalize);
    const maxBreakfastValue = Math.max(...breakfastToNormalize);
    const minLunchValue = Math.min(...lunchToNormalize);
    const maxLunchValue = Math.max(...lunchToNormalize);
    const minDinnerValue = Math.min(...dinnerToNormalize);
    const maxDinnerValue = Math.max(...dinnerToNormalize);
    const minSnackValue = Math.min(...snackToNormalize);
    const maxSnackValue = Math.max(...snackToNormalize);

    const normalizedBreakfastData = [];
    breakfastToNormalize.forEach((item) => {
      let x =
        (item - minBreakfastValue) / (maxBreakfastValue - minBreakfastValue);
      normalizedBreakfastData.push(x);
    });

    const normalizedLunchData = [];
    lunchToNormalize.forEach((item) => {
      let x = (item - minLunchValue) / (maxLunchValue - minLunchValue);
      normalizedLunchData.push(x);
    });

    const normalizedDinnerData = [];
    dinnerToNormalize.forEach((item) => {
      let x = (item - minDinnerValue) / (maxDinnerValue - minDinnerValue);
      normalizedDinnerData.push(x);
    });

    const normalizedSnackData = [];
    snackToNormalize.forEach((item) => {
      let x = (item - minSnackValue) / (maxSnackValue - minSnackValue);
      normalizedSnackData.push(x);
    });

    const valueBreakfast = [
      req.user.age,
      gender,
      normalizedBreakfastData[2],
      normalizedBreakfastData[3],
      activity,
      pekerjaan.pekerjaan_mahasiswa,
      pekerjaan.pekerjaan_pns,
      pekerjaan.pekerjaan_polisi,
      pekerjaan.pekerjaan_siswa,
      pekerjaan.pekerjaan_staff,
      pekerjaan.pekerjaan_wirausaha,
      normalizedBreakfastData[0],
      normalizedBreakfastData[1],
      normalizedBreakfastData[4],
      normalizedBreakfastData[5],
      normalizedBreakfastData[6],
      normalizedBreakfastData[7],
      normalizedBreakfastData[8],
      normalizedBreakfastData[9],
      normalizedBreakfastData[10],
      normalizedBreakfastData[11],
      normalizedBreakfastData[12],
      normalizedBreakfastData[13],
      normalizedBreakfastData[14],
      normalizedBreakfastData[15],
      normalizedBreakfastData[16],
      normalizedBreakfastData[17],
      normalizedBreakfastData[18],
    ];
    const valueLunch = [
      req.user.age,
      gender,
      normalizedLunchData[2],
      normalizedLunchData[3],
      activity,
      pekerjaan.pekerjaan_mahasiswa,
      pekerjaan.pekerjaan_pns,
      pekerjaan.pekerjaan_polisi,
      pekerjaan.pekerjaan_siswa,
      pekerjaan.pekerjaan_staff,
      pekerjaan.pekerjaan_wirausaha,
      normalizedLunchData[0],
      normalizedLunchData[1],
      normalizedLunchData[4],
      normalizedLunchData[5],
      normalizedLunchData[6],
      normalizedLunchData[7],
      normalizedLunchData[8],
      normalizedLunchData[9],
      normalizedLunchData[10],
      normalizedLunchData[11],
      normalizedLunchData[12],
      normalizedLunchData[13],
      normalizedLunchData[14],
      normalizedLunchData[15],
      normalizedLunchData[16],
      normalizedLunchData[17],
      normalizedLunchData[18],
    ];
    const valueDinner = [
      req.user.age,
      gender,
      normalizedDinnerData[2],
      normalizedDinnerData[3],
      activity,
      pekerjaan.pekerjaan_mahasiswa,
      pekerjaan.pekerjaan_pns,
      pekerjaan.pekerjaan_polisi,
      pekerjaan.pekerjaan_siswa,
      pekerjaan.pekerjaan_staff,
      pekerjaan.pekerjaan_wirausaha,
      normalizedDinnerData[0],
      normalizedDinnerData[1],
      normalizedDinnerData[4],
      normalizedDinnerData[5],
      normalizedDinnerData[6],
      normalizedDinnerData[7],
      normalizedDinnerData[8],
      normalizedDinnerData[9],
      normalizedDinnerData[10],
      normalizedDinnerData[11],
      normalizedDinnerData[12],
      normalizedDinnerData[13],
      normalizedDinnerData[14],
      normalizedDinnerData[15],
      normalizedDinnerData[16],
      normalizedDinnerData[17],
      normalizedDinnerData[18],
    ];
    const valueSnack = [
      req.user.age,
      gender,
      normalizedSnackData[2],
      normalizedSnackData[3],
      activity,
      pekerjaan.pekerjaan_mahasiswa,
      pekerjaan.pekerjaan_pns,
      pekerjaan.pekerjaan_polisi,
      pekerjaan.pekerjaan_siswa,
      pekerjaan.pekerjaan_staff,
      pekerjaan.pekerjaan_wirausaha,
      normalizedSnackData[0],
      normalizedSnackData[1],
      normalizedSnackData[4],
      normalizedSnackData[5],
      normalizedSnackData[6],
      normalizedSnackData[7],
      normalizedSnackData[8],
      normalizedSnackData[9],
      normalizedSnackData[10],
      normalizedSnackData[11],
      normalizedSnackData[12],
      normalizedSnackData[13],
      normalizedSnackData[14],
      normalizedSnackData[15],
      normalizedSnackData[16],
      normalizedSnackData[17],
      normalizedSnackData[18],
    ];

    const inputShape = [1, 28];

    const inputBreakfastData = tf.tensor2d(valueBreakfast, inputShape);
    const inputLunchData = tf.tensor2d(valueLunch, inputShape);
    const inputDinnerData = tf.tensor2d(valueDinner, inputShape);
    const inputSnackData = tf.tensor2d(valueSnack, inputShape);

    const breakfastPredictions = breakfastModel.predict(inputBreakfastData);
    const lunchPredictions = lunchModel.predict(inputLunchData);
    const dinnerPredictions = dinnerModel.predict(inputDinnerData);
    const snackPredictions = snackModel.predict(inputSnackData);

    const breakfastTopK = tf.topk(breakfastPredictions, 3); // Get the top 3 predictions
    const lunchTopK = tf.topk(lunchPredictions, 3); // Get the top 3 predictions
    const dinnerTopK = tf.topk(dinnerPredictions, 3); // Get the top 3 predictions
    const snackTopK = tf.topk(snackPredictions, 3); // Get the top 3 predictions

    // const values = topK.values.arraySync(); // Convert top values to array
    const breakfastIndex = breakfastTopK.indices.arraySync(); // Convert top indices to array
    const lunchIndex = lunchTopK.indices.arraySync(); // Convert top indices to array
    const dinnerIndex = dinnerTopK.indices.arraySync(); // Convert top indices to array
    const snackIndex = snackTopK.indices.arraySync(); // Convert top indices to array

    const breakfastMenu = await FoodsData.findAll({
      where: {
        id: {
          [Op.in]: breakfastIndex[0],
        },
      },
    });
    const lunchMenu = await FoodsData.findAll({
      where: {
        id: {
          [Op.in]: lunchIndex[0],
        },
      },
    });
    const dinnerMenu = await FoodsData.findAll({
      where: {
        id: {
          [Op.in]: dinnerIndex[0],
        },
      },
    });
    const snackMenu = await FoodsData.findAll({
      where: {
        id: {
          [Op.in]: snackIndex[0],
        },
      },
    });
    // return res.json(breakfastMenu);
    res.render("dashboard", {
      user: req.user,
      breakfastMenu: breakfastMenu,
      lunchMenu: lunchMenu,
      dinnerMenu: dinnerMenu,
      snackMenu: snackMenu,
    });
  },
};
