///<reference types="cypress"/>

import user from "../fixtures/user.json";
import order from "../support/helpers/order";
import homePage from "../support/page/HomePage";
import loginPage from "../support/page/LoginPage";
import regPage from "../support/page/RegPage";
import searchPage from "../support/page/SearchPage";
import { faker } from "@faker-js/faker";
user.email = faker.internet.email();
user.password = faker.internet.password();

describe("UI/UX", () => {
  it("Search of goods", { retries: 3 }, () => {
    cy.log("visit websait");
    homePage.visit();
    cy.log("Remove pop-up window");
    homePage.getPopup1Button().click();
    homePage.getPopup2Button().click();
    cy.log("BasePage");
    homePage.getHeaderAccountButton().click();
    homePage.getHeaderLoginButton().click();
    regPage.getcustomerButton().click();
    regPage.getemailField1().click().type(user.email);
    regPage.getpassword1().click().type(user.password);
    regPage.getpassword2().click().type(user.password);
    regPage.getdropDown1().click();
    regPage.getdropDown2().click();
    regPage.getanswerControl().click().type(user.secretName);
    regPage.getvalidation2().should("exist");
    regPage.getregisterButton().click();
    regPage
      .getconfirm21()
      .should(
        "contain.text",
        "Registration completed successfully. You can now log in."
      ); 
    cy.log("BasePage");
    homePage.getHeaderAccountButton().click();
    homePage.getHeaderLoginButton().click();
    cy.log("Login pop up");
    loginPage.getemailField().click().clear().type(user.email);
    loginPage.getpasswordField1().click().clear().type(user.password);
    loginPage.getloginButton().click();
    searchPage.getearchSmallButton().type(order.productSearchByName);
    searchPage.getvalidationRules1().should("contain.text", order.productName);
  });
});
