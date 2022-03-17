const mongoose = require("mongoose");

const mConect = async () =>
  await mongoose.connect(
    "mongodb+srv://jurify:<password>@cluster0.sk4xk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      user: "jurify",
      pass: "123abc",
      authSource: "admin",
    }
  );

module.exports = mConect;
