//Models
const { User } = require("../models/userModel");

const userExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    // search one element, recovery id  = ?, all value
    const user = await User.findOne({ where: { id } }); // search id with id params id:id

    if (!user) {
      return res.status(404).json({
        //user not found
        status: "error",
        message: "User not found ",
      });
    }

    //Add property user
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userExists };
