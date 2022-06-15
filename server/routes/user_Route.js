const router = require("express").Router();
const {
  userCreate,
  getUser,
  addtocart,
  shareListToFriend,
} = require("../controllers/user_Controller");

router.post("/create", userCreate);
router.post("/get", getUser);
router.post("/addtocart", addtocart);
router.post("/friend-list", shareListToFriend);

module.exports = router;
