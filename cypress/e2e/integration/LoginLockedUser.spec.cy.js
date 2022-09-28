import Login from "../../selectors/LoginPage.sel";

describe("Get error while trying to log", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("testData").then(function (testData) {
      this.testData = testData;
    });
  });
  it("Get eroor for an unsuccessful Login", function () {
    cy.get(Login.loginInput).type(this.testData.lockedOutUser);
    cy.get(Login.passwordInput).type(this.testData.password);
    cy.get(Login.loginButton).click();
    cy.get(Login.errorMessage).should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
