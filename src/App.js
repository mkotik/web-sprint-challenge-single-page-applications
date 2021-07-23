import React from "react";
import { Route, Link } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Header />
      <Route exact path="/">
        <Homepage />
      </Route>
    </>
  );
};
export default App;
