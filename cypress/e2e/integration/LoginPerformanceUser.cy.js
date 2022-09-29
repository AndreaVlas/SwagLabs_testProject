import Login from "../../selectors/LoginPage.sel";
describe("Test Inventory Page", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("testData").then(function (testData) {
      this.testData = testData;
    });
  });
  it("login", function () {
    cy.get(Login.loginInput).type(this.testData.performanceUser);
    cy.get(Login.passwordInput).type(this.testData.password);
    cy.get(Login.loginButton).click();
    cy.url().should("include", "/inventory.html");
  });
});
