// App.jsx
import React from "react";
import Foreground from "./components/Foreground";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Foreground />
      </Provider>
    </>
  );
};

export default App;
