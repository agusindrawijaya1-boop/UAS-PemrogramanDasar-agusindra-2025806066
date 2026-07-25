const express = require("express");
const router = express.Router();
const gadgetController = require("../controllers/gadgetController");

router.get("/", gadgetController.getAll);
router.get("/:id", gadgetController.getById);
router.post("/", gadgetController.create);
router.put("/:id", gadgetController.update);
router.delete("/:id", gadgetController.delete);

module.exports = router;