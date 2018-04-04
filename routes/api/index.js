const router = require("express").Router();
const headlineRoutes = require("./headlines");

router.use("/headlines", headlineRoutes);

module.exports = router;