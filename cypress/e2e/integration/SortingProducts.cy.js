import Login from "../../selectors/LoginPage.sel";
describe("Test Inventory Page", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("testData").then(function (testData) {
      this.testData = testData;
    });
  });

  it("Validate successful Login", function () {
    cy.get(Login.loginInput).type(this.testData.standardUser);
    cy.get(Login.passwordInput).type(this.testData.password);
    cy.get(Login.loginButton).click();
    cy.url().should("include", "/inventory.html");
  });
  it("Select options from dropdown", function () {
    cy.sortProductsBy("Name (Z to A)");
    cy.sortProductsBy("Price (low to high)");
    cy.sortProductsBy("Price (high to low)");
  });
});
