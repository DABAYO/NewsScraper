const router = require("express").Router();
const headlineController = require("../../controllers/headlineController");

router.get("/", headlineController.findAll);

module.exports = router;