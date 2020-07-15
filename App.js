import React from "react";
import MainApp from "./src/index";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store()}>
      <MainApp />
    </Provider>
  );
}
