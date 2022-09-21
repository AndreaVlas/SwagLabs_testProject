describe("Login to website", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("testData").then(function (testData) {
      this.testData = testData;
    });
  });
  it("Get eroor for an unsuccessful Login", function () {
    cy.get('[data-test="username"]').type(this.testData.lockedOutUser);
    cy.get('[data-test="password"]').type(this.testData.password);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
