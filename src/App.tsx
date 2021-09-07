import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./containers";
import { Provider } from "react-redux";
import { store } from "./redux/create";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/create";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Layout />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
