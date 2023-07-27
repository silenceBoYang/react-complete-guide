import Preloader from "./components/common/Preloader";
import React from "react";
import { render } from "react-dom";
import { onAuthStateFail, onAuthStateSuccess } from "./redux/authActions";
import {
  store as testStore,
  persistor as testPersistor,
} from "./redux/store/store";
// import "@/styles/style.scss";
import WebFont from "webfontloader";
import App from "./App";
import firebaseInstance from "./services/firebase";

WebFont.load({
  google: {
    families: ["Tajawal"],
  },
});

const { store, persistor } = { testStore, testPersistor };
const root = document.getElementById("app");

// Render the preloader on initial load
render(<Preloader />, root);

firebaseInstance.auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(onAuthStateSuccess(user));
  } else {
    store.dispatch(onAuthStateFail("Failed to authenticate"));
  }
  // then render the app after checking the auth state
  render(<App store={store} persistor={persistor} />, root);
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
