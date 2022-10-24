import Login from "../../selectors/LoginPage.sel";

describe("Get error while trying to log", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("testData").then(function (testData) {
      this.testData = testData;
    });
  });
  it("Get eroor for an unsuccessful Login", function () {
    cy.login("locked_out_user");
    cy.get(Login.errorMessage).should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
