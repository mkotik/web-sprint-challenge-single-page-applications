import React from "react";
import { Route, Link } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Header from "./Header";
import Form from "./Form/Form";

const App = () => {
  return (
    <>
      <Header />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/pizza">
        <Form />
      </Route>
    </>
  );
};
export default App;
