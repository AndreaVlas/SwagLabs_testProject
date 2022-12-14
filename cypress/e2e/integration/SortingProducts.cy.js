describe("Test Inventory Page", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Validate successful Login", function () {
    cy.login("standard_user");
    cy.url().should("include", "/inventory.html");
  });
  it("Select options from dropdown", function () {
    cy.sortProductsBy("Name (Z to A)");
    cy.sortProductsBy("Price (low to high)");
    cy.sortProductsBy("Price (high to low)");
  });
});
