import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Header from "./Header";
import Form from "./Form/Form";
import formSchema from "./Form/Validation/formSchema";
import * as yup from "yup";
import axios from "axios";
import SubmittedPage from "./SubmittedPage/SubmittedPage.js";

const initialFormData = {
  name: "",
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
  lessThan10Top: true,
};

const unCheckToppings = function () {
  const toppingInputs = document.querySelectorAll(".toppingInputBox");
  toppingInputs.forEach((topping) => {
    topping.checked = false;
  });
};

const App = () => {
  const [errors, setErrors] = useState(initialFormData);
  const [isDisabled, setIsDisabled] = useState(true);
  const [orderedPizzas, setOrderedPizzas] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory();

  const onChange = function (e) {
    const { value, name, checked } = e.target;
    let valueToUse = e.target.type === "checkbox" ? checked : value;
    if (e.target.type === "number") valueToUse = Number(valueToUse);
    // tooManyToppings();
    const newFormData = { ...formData };
    newFormData[name] = valueToUse;
    setFormErrors(name, valueToUse);
    setFormData(newFormData);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    setOrderedPizzas([formData, ...orderedPizzas]);
    setFormData(initialFormData);
    unCheckToppings();
    axios
      .post("https://reqres.in/api/orders")
      .then(() => {
        console.log("post was successful");
        history.push("./submitted");
      })
      .catch((err) => console.log(err));
  };

  const setFormErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  // This function doesnt work and im running low on time. It should disable the add to order button when there are more than 10 toppings selected
  // const tooManyToppings = function () {
  //   const toppings = Array.from(document.querySelectorAll(".toppingInputBox"));
  //   const checkedToppings = toppings.filter((cur) => cur.checked === true);
  //   // toppings.filter((cur) => cur.checked === true);
  //   console.log(checkedToppings.length);
  //   if (checkedToppings.length > 10) {
  //     console.log("setting to false");
  //     const newData = { ...formData };
  //     newData["lessThan10Top"] = false;
  //     setFormData({ newData });
  //     console.log(formData);
  //   } else {
  //     console.log("setting to true");
  //     const newData = { ...formData };
  //     newData["lessThan10Top"] = true;
  //     setFormData({ ...newData });
  //     console.log(formData);
  //   }
  // };

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setIsDisabled(!valid));
  }, [formData]);

  console.log(errors);
  return (
    <>
      <Header />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/pizza">
        <Form
          onChange={onChange}
          onSubmit={onSubmit}
          formData={formData}
          isDisabled={isDisabled}
          errors={errors}
        />
      </Route>
      <Route path="/submitted">
        <SubmittedPage />
      </Route>
    </>
  );
};
export default App;
