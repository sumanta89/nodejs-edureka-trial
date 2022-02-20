const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
router.put("/", userController.update);
router.get("/:id", userController.getById);
router.delete("/:id", userController.deleteUser);
module.exports = router;