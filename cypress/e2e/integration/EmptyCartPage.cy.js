import Cart from "../../selectors/CartPage.sel";
describe("Test Cart Page", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Validate successful Login", function () {
    cy.login("standard_user");
    cy.url().should("include", "/inventory.html");
  });
  it("Open the cart", function () {
    cy.get(Cart.getCartButton).click();
    cy.login("standard_user");
    cy.get(Cart.getCartButton).click();
    cy.url().should("include", "cart.html");
    cy.get(Cart.cartList);
    cy.get(Cart.descriptionLabel).should("have.text", "DESCRIPTION");
    cy.get(Cart.quantityLabel).should("have.text", "QTY");
    cy.get(Cart.continueShoppingButton).click();
  });
});
