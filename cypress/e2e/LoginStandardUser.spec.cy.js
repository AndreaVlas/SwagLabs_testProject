describe("Login to website", () => {
  before(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("testData").then(function (testData) {
      this.testData = testData;
    });
  });
  it("Validate successful Login", function () {
    cy.get('[data-test="username"]').type(this.testData.standardUser);
    cy.get('[data-test="password"]').type(this.testData.password);
    cy.get('[data-test="login-button"]').click();
  });
});
