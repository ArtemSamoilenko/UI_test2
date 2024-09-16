import BasePage from "./BasePage";

class RegPage extends BasePage {
  constructor() {
    super();
    this.elements.customerButton = 'a[class="primary-link"]';
    this.elements.emailField1 = '[id="emailControl"]';
    this.elements.emailField12 = '[id="emailControl"]';
    this.elements.password1 = '[id="passwordControl"]';
    this.elements.password2 = '[id="repeatPasswordControl"]';
    this.elements.dropDown1 = ".mat-select-arrow.ng-tns-c130-17";
    this.elements.dropDown2 = "#mat-option-7 span";
    this.elements.answerControl = '[id="securityAnswerControl"]';
    this.elements.validation2 = '[id="registerButton"]';
    this.elements.registerButton = '[id="registerButton"]';
    this.elements.confirm21 = '[id="cdk-overlay-4"]';
  }

  getcustomerButton() {
    return cy.get(this.elements.customerButton);
  }
  getemailField1() {
    return cy.get(this.elements.emailField1);
  }
  getemailField12() {
    return cy.get(this.elements.emailField12);
  }
  getpassword1() {
    return cy.get(this.elements.password1);
  }
  getpassword2() {
    return cy.get(this.elements.password2);
  }
  getdropDown1() {
    return cy.get(this.elements.dropDown1);
  }
  getdropDown2() {
    return cy.get(this.elements.dropDown2);
  }
  getanswerControl() {
    return cy.get(this.elements.answerControl);
  }
  getvalidation2() {
    return cy.get(this.elements.validation2);
  }
  getregisterButton() {
    return cy.get(this.elements.registerButton);
  }
  getconfirm21() {
    return cy.get(this.elements.confirm21);
  }
}
export default new RegPage();
