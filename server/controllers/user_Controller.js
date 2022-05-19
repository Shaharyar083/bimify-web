const User_Modal = require("../models/user_Model");

const getUser = async (req, res) => {
  try {
    let { email } = req.body;
    const user = await User_Modal.findOne({ email });
    res.status(200).json({ user, message: "User details!" });
  } catch (err) {
    res.status(400).json({ err, message: "Server Error!" });
  }
};

const addtocart = async (req, res) => {
  try {
    let { tenantId, name, email, productID } = req.body;

    const user = await User_Modal.findOne({ email });

    if (!user) {
      const data = User_Modal({
        tenantId,
        name,
        email,
        cart: [productID],
      });

      const response = await data.save();
      return res
        .status(200)
        .json({ user: response, message: "Product added to cart" });
    }

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

module.exports = { getUser, addtocart };
