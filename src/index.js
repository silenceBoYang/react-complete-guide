import Preloader from "./components/common/Preloader";
import React from "react";
import { render } from "react-dom";
import {
  onAuthStateFail,
  onAuthStateSuccess,
} from "./redux/actions/authActions";
import configureStores from "./redux/store/store";
// import "@/styles/style.scss";
import WebFont from "webfontloader";
import App from "./App";
import firebase from "./services/firebase";
import ReactDOM from "react-dom/client";

WebFont.load({
  google: {
    families: ["Tajawal"],
  },
});

const { store, persistor } = configureStores();
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the preloader on initial load
root.render(
  <React.StrictMode>
    (<Preloader />)
  </React.StrictMode>
);
// render(<Preloader />, root);

firebase.auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(onAuthStateSuccess(user));
  } else {
    store.dispatch(onAuthStateFail("Failed to authenticate"));
  }
  // then render the app after checking the auth state
  root.render(
    <React.StrictMode>
      <App store={store} persistor={persistor} />
    </React.StrictMode>
  );
  // render(<App store={store} persistor={persistor} />, root);
});

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
