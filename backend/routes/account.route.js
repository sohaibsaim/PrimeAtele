const router = require("express").Router();
const controller = require("../controllers/account.controller");
router.post("/login",controller.login);
router.post("/create",controller.create);
module.exports = router;