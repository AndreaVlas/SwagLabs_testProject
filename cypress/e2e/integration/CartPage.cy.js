describe("Test Inventory Page", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Validate successful Login", function () {
    cy.login("standard_user");
    cy.url().should("include", "/inventory.html");
  });
  it("Open the cart", function () {
    cy.get(".shopping_cart_link").click();
    cy.login("standard_user");
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "cart.html");
  });
});
