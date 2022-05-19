import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import WishlistPage from "../components/Wishlist Page";
import TagManager from "react-gtm-module";
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useSelector } from "react-redux";
import { getProductByIDs } from "../api";

const Wishlist = () => {
  let { accounts } = useMsal();
  const user = useSelector((store) => store.user.user);
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // const getProduct = (id) => {
  //   return new Promise((resolve, reject) => {
  //     fetch(
  //       `https://bimify.it/wp-json/wc/v3/products/${id}` +
  //         "?consumer_key=ck_e4c8d3b534ba1ec4a90728c04a0e74b37930e64a" +
  //         "&consumer_secret=cs_ab90ed6e331eb3a2b8b16607e2b00c50642c890a"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         resolve(data);
  //         console.log("get data", data);
  //       })
  //       .catch((err) => console.log("get err", err));
  //   });
  // };

  // useEffect(async () => {
  //   let temp = [];
  //   for (let i = 0; i < user?.cart.length; i++) {
  //     temp = [...temp, await getProduct(user?.cart[i])];
  //   }
  //   console.log("for", temp);
  // }, []);

  useEffect(() => {
    if (user?.cart?.length > 0 && accounts[0]) {
      getProductByIDs({ productIDs: user?.cart })
        .then((data) => {
          setCart(data.data);
          setLoading(false);
        })
        .catch((err) => console.log("product error =>", err.message));
    } else {
      setCart([]);
      setLoading(false);
    }
  }, [accounts[0], user]);

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        path: "/wishlist",
      },
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <AuthenticatedTemplate>
            <WishlistPage
              cart={cart}
              email={accounts[0]?.username}
              Loading={() => setLoading(true)}
            />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <div className="unauthorized">
              You are not signed in! Please sign in.
            </div>
          </UnauthenticatedTemplate>
          <Footer />
        </>
      )}
    </>
  );
};

export default Wishlist;
