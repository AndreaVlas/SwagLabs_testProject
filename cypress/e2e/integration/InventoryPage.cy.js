import Modal from "../../selectors/Modal.sel";
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
  it("Open the main modal", function () {
    cy.get(Modal.OpenModal).click();
    cy.get(Modal.CloseModal).click();
  });
  it("Select options from dropdown", function () {
    cy.get('[data-test="product_sort_container"]').select("Name (Z to A)");
    let optionsArray = [];
    cy.get(".inventory_list")
      .each(($el, index) => {
        optionsArray[index] = $el.text();
        cy.log($el);
      })
      .then(() => {
        expect(optionsArray).to.deep.equal(optionsArray.sort());
      });
  });
  it("will check the product and add it to the cart", function () {
    cy.get(".inventory_list")
      .find(".inventory_item")
      .each(($el) => {
        const productName = $el.find(".inventory_item_name").text();
        if (productName.includes("Sauce Labs Onesie")) {
          $el
            .find('button[class="btn btn_primary btn_small btn_inventory"]')
            .click();
        }
      });
  });
  it("will check if to a product correspond it's price", function () {
    cy.get(".inventory_item").each(($e1, index) => {
      const text = $e1.text();
      if (text.includes("Onesie")) {
        cy.get(".inventory_item_price")
          .eq(index)
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("$7.99");
          });
      }
    });
  });
});
//when the add button is clicked, cart is incremented by 1,
//and where is clicked again(same button) is decremented by 1.
