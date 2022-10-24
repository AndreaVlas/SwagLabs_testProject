// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
const password = "secret_sauce";
Cypress.Commands.add("login", (role) => {
  cy.get('[data-test="username"]').type(role);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

let targetedAddItemIndex = 0;
Cypress.Commands.add("addItemCart", () => {
  cy.get('button[class = "btn btn_primary btn_small btn_inventory"]')
    .eq(targetedAddItemIndex)
    .click();
});
let targetedRemoveItemIndex = 0;
Cypress.Commands.add("removeItemCart", () => {
  const removeButton = cy.get('[data-test="remove-sauce-labs-backpack"]');
  removeButton.should("have.text", "Remove").eq(targetedAddItemIndex).click();
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("sortProductsBy", (option) => {
  cy.get('[data-test="product_sort_container"]').select(option);
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
