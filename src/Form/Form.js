import React from "react";
import "./Form.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

function SectionDivider(props) {
  const { mainText, subText } = props;
  return (
    <div className="sectionDividerWrap">
      <h2>{mainText}</h2>
      <h3>{subText}</h3>
    </div>
  );
}

function FormTop() {
  return (
    <div className="formTop">
      <div className="formHeader">
        <h2 className="formTitle">Build Your Own Pizza</h2>
      </div>
      <div className="formImgWrap"></div>
      <div className="formSubHeader">
        <h2 className="formSubTitle">Build Your Own Pizza</h2>
      </div>
    </div>
  );
}

function NameForm(props) {
  const { onChange, formData, errors } = props;
  return (
    <div className="nameForm">
      <input
        onChange={onChange}
        type="text"
        name="name"
        placeholder="What is your Name ?"
        value={formData.name}
        id="name-input"
      />
      <p className="error">{errors.name}</p>
    </div>
  );
}

function SizeForm(props) {
  const { onChange, formData, errors } = props;
  return (
    <div className="sizeForm">
      <select
        value={formData.size}
        className="sizeSelect"
        name="size"
        onChange={onChange}
        id="size-dropdown"
      >
        <option value="">Select</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <p className="sizeError error">{errors.size}</p>
    </div>
  );
}

function SauceForm(props) {
  const { onChange, formData } = props;
  return (
    <div className="sauceForm">
      <label>
        <input
          type="radio"
          name="sauce"
          value="Original Red"
          onChange={onChange}
          checked={formData.sauce === "Original Red"}
        />
        Original Red
      </label>
      <label>
        <input
          type="radio"
          name="sauce"
          value="Garlic Ranch"
          onChange={onChange}
          checked={formData.sauce === "Garlic Ranch"}
        />
        Garlic Ranch
      </label>
      <label>
        <input
          type="radio"
          name="sauce"
          value="BBQ Sauce"
          onChange={onChange}
          checked={formData.sauce === "BBQ Sauce"}
        />
        BBQ Sauce
      </label>
      <label>
        <input
          type="radio"
          name="sauce"
          value="Spinach Alfredo"
          onChange={onChange}
          checked={formData.sauce === "Spinach Alfredo"}
        />
        Spinach Alfredo
      </label>
    </div>
  );
}
const toppings = [
  "Pepperoni",
  "Sausage",
  "Canadian Bacon",
  "Spicy Italian Sausage",
  "Grilled Chicken",
  "Onions",
  "Green Pepper",
  "Diced Tomatoes",
  "Black Olives",
  "Roasted Garlic",
  "Artichoke Hearts",
  "Three Cheese",
  "Pineapple",
  "Extra Cheese",
];

function ToppingInput(props) {
  const { topping, onChange, formData } = props;
  return (
    <div className="toppingInput">
      <label>
        <input
          className="toppingInputBox"
          onChange={onChange}
          type="checkbox"
          name={topping.toLowerCase()}
          data-name={topping.toLowerCase()}
        />
        {topping}
      </label>
    </div>
  );
}

function ToppingsForm(props) {
  const { onChange, formData } = props;
  return (
    <div className="toppingsForm">
      {toppings.map((topping, i) => (
        <ToppingInput data-key={i} onChange={onChange} topping={topping} />
      ))}
    </div>
  );
}

function SubstituteForm(props) {
  const { onChange, formData } = props;
  return (
    <div className="substituteForm">
      <label>
        <input
          onChange={onChange}
          type="checkbox"
          name="glutenFreeCrust"
          checked={formData.glutenFreeCrust}
        />{" "}
        Gluten Free Crust (+ $1.00)
      </label>
    </div>
  );
}

function SpecialForm(props) {
  const { onChange, formData } = props;
  return (
    <div className="specialForm">
      <input
        onChange={onChange}
        type="text"
        name="specialInstructions"
        placeholder="Anything else you'd like to add?"
        value={formData.specialInstructions}
        id="special-text"
      />
    </div>
  );
}

function BottomTab(props) {
  const { onChange, isDisabled, errors } = props;
  return (
    <div>
      <div className="bottomTab">
        <div className="bottomTabLeft">
          <input
            placeholder="Quantity (required)"
            onChange={onChange}
            name="quantity"
            type="number"
          />
        </div>
        <div className="bottomTabRight">
          <button disabled={isDisabled} id="order-button">
            <h3 className="bottomTabText">Add to Order </h3>
            <h3 className="bottomTabPrice"> $17.99</h3>
          </button>
        </div>
      </div>
      <p className="error quantityError">
        {errors.quantity ? errors.quantity : ""}
      </p>
    </div>
  );
}
export default function Form(props) {
  const { onChange, onSubmit, formData, isDisabled, errors } = props;
  return (
    <div className="formBackground">
      <form className="formWrap" onSubmit={onSubmit} id="pizza-form">
        <FormTop />
        <SectionDivider mainText={"Name"} subText={"Required"} />
        <NameForm formData={formData} onChange={onChange} errors={errors} />
        <SectionDivider mainText={"Choice of Size"} subText={"Required"} />
        <SizeForm onChange={onChange} formData={formData} errors={errors} />
        <SectionDivider mainText={"Choice of Sauce"} subText={"Required"} />
        <SauceForm onChange={onChange} formData={formData} />
        <SectionDivider mainText={"Add Toppings"} subText={"Choose up to 10"} />
        <ToppingsForm onChange={onChange} formData={formData} />
        <SectionDivider
          mainText={"Choice of Substitute"}
          subText={"Choose up to 1"}
        />
        <SubstituteForm onChange={onChange} formData={formData} />
        <SectionDivider mainText={"Special Instructions"} subText={""} />
        <SpecialForm onChange={onChange} formData={formData} />
        <BottomTab
          onChange={onChange}
          isDisabled={isDisabled}
          errors={errors}
        />
      </form>
    </div>
  );
}
