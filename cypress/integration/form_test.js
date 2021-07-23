describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002/pizza");
  });

  it("Check if you can type in Name Input", () => {
    nameInput()
      .should("have.value", "")
      .type("Test String")
      .should("have.value", "Test String");
  });

  it("Can you select multiple toppings?", () => {
    pepperoniInput().should("exist").check();
    pineappleInput().should("exist").check();
    canadianBaconInput().should("exist").check();
  });

  it("Can you submit the Form?", () => {
    nameInput().type("Marat Kotik").should("have.value", "Marat Kotik");
    sizeInput().should("exist").select("medium");
    redSauceInput().should("exist").check();
    pepperoniInput().check();
    quantityInput().should("exist").type(1);
    submitBtn().should("exist").click();
  });
});

const nameInput = () => cy.get("input[name='name']");
const sizeInput = () => cy.get("select[name='size']");
const redSauceInput = () => cy.get("input[name='sauce']").eq(0);
const pepperoniInput = () => cy.get("input[name='pepperoni']");
const canadianBaconInput = () => cy.get("input[name='canadian bacon']");
const pineappleInput = () => cy.get("input[name='pineapple']");
const quantityInput = () => cy.get("input[name='quantity']");
const submitBtn = () => cy.get("button[id='order-button']");
