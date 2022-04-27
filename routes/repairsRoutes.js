const express = require("express");

const  { repairExists } = require("../middlewares/repairsMiddlewares");

//Controller
const {
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require("../controllers/repairController");

const router = express.Router();

router.get("/", getAllRepairs);
router.post("/", createRepair);

router
.route("/:id")
.get(repairExists, getRepairById)
.patch(repairExists, updateRepair)
.delete(repairExists, deleteRepair);

module.exports = { repairsRouter: router };
