const { CheckAuth } = require("../middlewares/jwr.middleware");
const controller = require("../controllers/admin.controller");
const router = require("express").Router();
router.get("/all-customers",CheckAuth(),controller.allCustomer);
router.post("/create-customer",CheckAuth(),controller.createCustomer);
module.exports = router;