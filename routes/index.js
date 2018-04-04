const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
// router.use("/html", htmlRoutes);
module.exports = router;