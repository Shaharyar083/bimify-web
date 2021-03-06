const User_Modal = require("../models/user_Model");

const userCreate = async (req, res) => {
  try {
    let { tenantId, name, email } = req.body;

    let user = await User_Modal.findOne({ email });

    if (!user) {
      const data = User_Modal({
        tenantId,
        name,
        email,
      });

      user = await data.save();
    }

    res.status(200).json({ data: user, message: "Success!" });
  } catch (err) {
    res.status(400).json({ err, message: "Server Error!" });
  }
};

const getUser = async (req, res) => {
  try {
    let { email } = req.body;
    const user = await User_Modal.findOne({ email });

    if (user) {
      res.status(200).json({ user, userExist: true, message: "Success!" });
    } else {
      res.status(200).json({ userExist: false });
    }
  } catch (err) {
    res.status(400).json({ err, message: "Server Error!" });
  }
};

const addtocart = async (req, res) => {
  try {
    let { tenantId, name, email, productID } = req.body;

    const user = await User_Modal.findOne({ email });

    if (user.cart.includes(productID)) {
      const response = await User_Modal.findOneAndUpdate(
        { email },
        { $set: { cart: user?.cart?.filter((id) => id !== productID) } },
        { new: true }
      );

      return res
        .status(200)
        .json({ user: response, message: "Product remove to cart" });
    } else {
      const response = await User_Modal.findOneAndUpdate(
        { email },
        { $set: { cart: [...user?.cart, productID] } },
        { new: true }
      );
      return res
        .status(200)
        .json({ user: response, message: "Product added to cart" });
    }
  } catch (err) {
    res.status(400).json({ err, message: "Server Error!" });
  }
};

const shareListToFriend = async (req, res) => {
  try {
    let { email, myCart, friendEmail } = req.body;

    const friend = await User_Modal.findOne({ email: friendEmail });
    const listAlreadyShare = friend.friendWishList.filter(
      (ele) => ele.email === email
    );

    if (listAlreadyShare.length) {
      let temp = friend?.friendWishList?.map((ele) => {
        if (ele.email === email) {
          return {
            email,
            list: myCart,
          };
        } else {
          return ele;
        }
      });

      await User_Modal.findOneAndUpdate(
        { email: friendEmail },
        { friendWishList: temp },
        { new: true }
      );
      return res
        .status(200)
        .json({ message: "List already share and updated!" });
    } else {
      let temp = [
        ...friend.friendWishList,
        {
          email,
          list: myCart,
        },
      ];

      await User_Modal.findOneAndUpdate(
        { email: friendEmail },
        { friendWishList: temp },
        { new: true }
      );

      return res.status(200).json({ message: "WishList shared!" });
    }
  } catch (err) {
    res.status(400).json({ err, message: "Server Error!" });
  }
};
module.exports = { userCreate, getUser, addtocart, shareListToFriend };
