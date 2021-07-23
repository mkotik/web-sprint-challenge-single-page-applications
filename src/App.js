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
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
