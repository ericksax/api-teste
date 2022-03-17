const { app } = require("./config/custonExpress");
const mConect = require("./db/config");

const connection = () => {
  try {
    mConect().catch((err) => console.log(err));

    app.listen(3005, () => {
      console.log("Server is running on port 3005");
    });
  } catch (err) {
    console.log(err);
  }
};
connection();
