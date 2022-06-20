import React, { useState, useEffect } from "react";

import TagManager from "react-gtm-module";
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/user-reducer";

// api's
import { getProductByIDs, getUserDetail } from "../api";

// component's
import Navbar from "../components/Navbar";
import FavoritePage from "../components/Favorite";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Favorite = () => {
  const dispatch = useDispatch();
  let { accounts } = useMsal();

  const user = useSelector((store) => store.user.user);
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.cart?.length > 0 && accounts[0]) {
      getProductByIDs({ productIDs: user?.cart })
        .then((data) => {
          setCart(data.data);
          setLoading(false);
        })
        .catch((err) =>
          console.log(
            "favorite page getting whislist api error =>",
            err.message
          )
        );
    } else {
      setCart([]);
      setLoading(false);
    }
  }, [accounts[0], user]);

  const fetchUser = async () => {
    let response = await getUserDetail({ email: accounts[0]?.username });
    dispatch(setUser(response.user));
  };

  useEffect(() => {
    if (accounts[0]) {
      fetchUser();
    }
  }, [accounts[0]]);

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
            <FavoritePage
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

export default Favorite;
