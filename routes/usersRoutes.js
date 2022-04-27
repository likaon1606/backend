const express = require("express");

//MIDDLEWARES
const { userExists } = require("../middlewares/usersMiddlewares");

//Controller
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

// router.get('/:id', getUserById); //request id dinamic

// router.patch('/:id', updateUser);

// router.delete('/:id', deleteUser);

router //optimize routes
  .route("/:id")
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
