import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import TagManager from "react-gtm-module";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import "./i18Next";
import Loader from "./components/Loader";

const msalInstance = new PublicClientApplication(msalConfig);

const tagManagerArgs = {
  gtmId: "GTM-T6ZLXPP",
  // auth: "pzdcUXgdkQ8Tcj4hwkOciw",
  // preview: "3",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <MsalProvider instance={msalInstance}>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  </MsalProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
