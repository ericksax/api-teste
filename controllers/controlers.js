const User = require("../models/Users");

module.exports = {
  store: async (req, res) => {
    try {
      const user_exists = await User.findOne({ email: req.body.email });
      if (user_exists) {
        return res.status(400).json({ message: "user alread exists" });
      }
      const user = await User.create(req.body);

      return res.status(201).json({ user });
    } catch (err) {
      console.log(err);
    }
  },

  index: async (req, res) => {
    try {
      const users = await User.find().sort({ createdAt: -1 }).limit(5);
      return res.status(200).json({ users });
    } catch (err) {
      console.error(err);
    }
  },

  update: async (req, res) => {
    const { email, login, name, register } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { email },
        { email, login, name, register },
        (err, user) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json(user);
          }
        }
      );
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
    }
  },

  destroy: async (req, res) => {
    try {
      await User.findByIdAndDelete({ _id: req.body.id });
      res.status(200).json({ message: "user deleted" });
    } catch (err) {
      console.log(err);
    }
  },
};
