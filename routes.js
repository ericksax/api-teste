const express = require("express");
const router = express.Router();
const controllers = require("./controllers/controlers");

router.post("/user", controllers.store);
router.get("/user", controllers.index);
router.post("/updated", controllers.update);
router.delete("/user", controllers.destroy);

module.exports = router;
