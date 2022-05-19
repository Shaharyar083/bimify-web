import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AccountPage from "../components/Account Page";
import Footer from "../components/Footer";
import TagManager from "react-gtm-module";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

const Account = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        path: "/my-account",
      },
    });
  }, []);
  return (
    <>
      <Navbar />
      <AuthenticatedTemplate>
        <AccountPage />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <div className="unauthorized">
          You are not signed in! Please sign in.
        </div>
      </UnauthenticatedTemplate>
      <Footer />
    </>
  );
};

export default Account;
