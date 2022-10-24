describe("Test Inventory Page", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
  });
  it("login", function () {
    cy.login("performance_glitch_user");
    cy.url().should("include", "/inventory.html");
  });
});
