const { Repair } = require("../models/repairsModel");

const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll();

    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

const getRepairById = async (req, res) => {
  try {
    const { repair } = req;

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRepair = async (req, res) => {
  const { date, userId } = req.body;

  const newRepair = await Repair.create({ date, userId });

  res.status(201).json({ newRepair });
};

const updateRepair = async (req, res) => {
  try {
    const { repair } = req;
    const { date, status } = req.body;

    await repair.update({ date, status });

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { repair } = req;

    await repair.update({ status: "cancelled" });

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllRepairs, createRepair, getRepairById, updateRepair, deleteRepair };
