const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const greeting = "Hello!";
    res.send(greeting);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;
