const { Repair } = require("../models/repairsModel");

const repairExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: "Repair not found",
      });
    }else if(repair.status !== "pending"){
      return res.status(404).json({
        status: "error",
        message: "pending not found",
      });
    } 

    req.repair = repair;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { repairExists };