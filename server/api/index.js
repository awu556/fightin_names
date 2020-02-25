const router = require("express").Router();

router.use("/stockData", require("./stockData"));
router.use("/users", require("./users"));

module.exports = router;
