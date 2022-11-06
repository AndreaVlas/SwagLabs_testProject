describe("Test Cart Page", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Validate successful Login", function () {
    cy.login("standard_user");
    cy.url().should("include", "/inventory.html");
  });
});
