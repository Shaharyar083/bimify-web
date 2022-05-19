const router = require("express").Router();
const { getUser, addtocart } = require("../controllers/user_Controller");

router.post("/get", getUser);
router.post("/addtocart", addtocart);

module.exports = router;
