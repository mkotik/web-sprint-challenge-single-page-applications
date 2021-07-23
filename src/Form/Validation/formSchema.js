import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Your name is required")
    .min(2, "Your name must be at least 2 characters long"),
  size: yup.string().required("Size is required"),
  sauce: yup.string().required("Sauce is required"),
  quantity: yup.number().required("Quantity is required").min(1),
  pepperoni: yup.boolean(),
  pepperoni: yup.boolean(),
  ["canadian bacon"]: yup.boolean(),
  ["grilled chicken"]: yup.boolean(),
  ["green pepper"]: yup.boolean(),
  ["black olives"]: yup.boolean(),
  ["artichoke hearts"]: yup.boolean(),
  ["sausage"]: yup.boolean(),
  ["spicy italian sausage"]: yup.boolean(),
  ["onions"]: yup.boolean(),
  ["diced tomatoes"]: yup.boolean(),
  ["roasted garlic"]: yup.boolean(),
  ["three cheese"]: yup.boolean(),
  ["extra cheese"]: yup.boolean(),
  ["pineapple"]: yup.boolean(),
  glutenFreeCrust: yup.boolean(),
  specialInstructions: yup.string(),
  lessThan10Top: yup.boolean().oneOf([true]),
});

export default formSchema;
