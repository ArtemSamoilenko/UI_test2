///<reference types="cypress"/>

import user from "../fixtures/user.json";
import homePage from "../support/page/HomePage";
import regPage from "../support/page/RegPage";
import { faker } from "@faker-js/faker";
user.email = faker.internet.email();
user.password = faker.internet.password();

describe("UI/UX", () => {
  it("Registration", () => {
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
  });

  it("Invalid registration login", () => {
    cy.log("visit websait");
    homePage.visit();
    cy.log("Remove pop-up window");
    homePage.getPopup1Button().click();
    homePage.getPopup2Button().click();
    cy.log("BasePage");
    homePage.getHeaderAccountButton().click();
    homePage.getHeaderLoginButton().click();
    regPage.getcustomerButton().click();
    regPage.getemailField12().click().type("user.email");
    regPage.getpassword1().click().type(user.password);
    regPage.getpassword2().click().type(user.password);
    regPage.getdropDown1().click();
    regPage.getdropDown2().click();
    regPage.getanswerControl().click().type(user.secretName);
    regPage.getvalidation2().should("be.disabled");
  });
});