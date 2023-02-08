const { CheckAuth } = require("../middlewares/jwr.middleware");
const controller = require("../controllers/admin.controller");
const router = require("express").Router();
router.get("/all-customers",CheckAuth(),controller.allCustomer);
router.get("/export-customers",CheckAuth(),controller.exportCustomers);
router.post("/create-customer",CheckAuth(),controller.createCustomer);
router.get("/get-customer",CheckAuth(),controller.getCustomer);
module.exports = router;