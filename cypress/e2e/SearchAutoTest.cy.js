///<reference types="cypress"/>

import user from "../fixtures/user.json";
import order from "../support/helpers/order";
import homePage from "../support/page/HomePage";
import loginPage from "../support/page/LoginPage";
import regPage from "../support/page/RegPage";
import searchAutoPage from "../support/page/SearchAutoPage";
import { faker } from "@faker-js/faker";
import { findProduct } from "../support/helpers/helper";
user.email = faker.internet.email();
user.password = faker.internet.password();

describe("UI/UX", () => {
  it("Purchase of goods", () => {
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
    homePage.getHeaderAccountButton().click();
    homePage.getHeaderLoginButton().click();
    cy.log("Login pop up");
    loginPage.getemailField().click().clear().type(user.email);
    loginPage.getpasswordField1().click().clear().type(user.password);
    loginPage.getloginButton().click();
    findProduct(order.productName);
    searchAutoPage.getshoppingCartButton1().click();
    searchAutoPage.getcheckoutButton1().click({ timeout: 5000 });
    cy.log("1 filling pop up start");
    searchAutoPage.getfield1().click();
    searchAutoPage.getcountry1().click().type(user.contryID);
    searchAutoPage.getnameAndLast().click().type(user.nameID);
    searchAutoPage.getnumberPhone().click().type(user.nuberPhoneID);
    searchAutoPage.getidPostCode().click().type(user.postCodeID);
    searchAutoPage.getnewAdressButton().click().type(user.adressID);
    searchAutoPage.getmyCity().click().type(user.cityID);
    searchAutoPage.getmySite().click().type(user.siteID);
    searchAutoPage.getsubmitButton().click();
    cy.log("1 filling pop up end");
    searchAutoPage.getbutton11().last().click();
    ({ force: true });
    searchAutoPage.getbutton12().click();
    searchAutoPage.getbutton13().eq(2).click({ force: true });
    searchAutoPage.getbutton14().click();
    cy.log("2 filling pop up");
    searchAutoPage.getaddCardPayButton().click();
    searchAutoPage.getnameButton2().type(user.nameID);
    searchAutoPage.getidPayCard1().click().type(user.cardID);
    searchAutoPage.getdropdownMonth().select("1");
    searchAutoPage.getdropdownYear().select("2080");
    cy.log("submit");
    searchAutoPage.getsubmitButton22().click();
    searchAutoPage.getbackButton2().click();
    searchAutoPage.getdeliveryButton2().eq(2).click({ force: true });
    searchAutoPage.getconticueButton2().click();
    searchAutoPage.getlastRadioButton3().last().click({ force: true });
    searchAutoPage.getconticueButton3().click();
    searchAutoPage.getpayOrder3().click();
    searchAutoPage
      .getconfirm4()
      .should("contain.text", "Thank you for your purchase!");
  });
});