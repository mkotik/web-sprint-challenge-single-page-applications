import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Header from "./Header";
import Form from "./Form/Form";

const initialFormData = {
  size: "",
  sauce: "",
  glutenFreeCrust: false,
  specialInstructions: "",
  quantity: 0,
  ["pepperoni"]: false,
  ["canadian bacon"]: false,
  ["grilled chicken"]: false,
  ["green pepper"]: false,
  ["black olives"]: false,
  ["artichoke hearts"]: false,
  ["pineapple"]: false,
  ["sausage"]: false,
  ["spicy italian sausage"]: false,
  ["onions"]: false,
  ["diced tomatoes"]: false,
  ["roasted garlic"]: false,
  ["three cheese"]: false,
  ["extra cheese"]: false,
};

const App = () => {
  // console.log(initialFormData["canadian bacon"]);
  const [orderedPizzas, setOrderedPizzas] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const onChange = function (e) {
    const { value, name, checked } = e.target;
    const valueToUse = e.target.type === "checkbox" ? checked : value;
    console.log(valueToUse);
    // console.log(name);
    // console.log(e.target.checked);
    const newFormData = { ...formData };
    newFormData[name] = valueToUse;
    setFormData(newFormData);
    // console.log(formData);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    setOrderedPizzas([formData, ...orderedPizzas]);
    setFormData(initialFormData);
  };
  console.log(formData);
  console.log(orderedPizzas);
  return (
    <>
      <Header />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/pizza">
        <Form onChange={onChange} onSubmit={onSubmit} formData={formData} />
      </Route>
    </>
  );
};
export default App;
