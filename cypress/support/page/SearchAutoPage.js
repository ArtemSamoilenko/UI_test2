import BasePage from "./BasePage";

class SearchAutoPage extends BasePage {
  constructor() {
    super();
    this.elements.shoppingCartButton1 = 'button+mat-menu+button';
    this.elements.checkoutButton1 = '[id="checkoutButton"]';

    this.elements.field1 = '[aria-label="Add a new address"]';
    this.elements.country1 = 'div.ng-tns-c119-25 input';
    this.elements.nameAndLast = '#mat-input-10';
    this.elements.numberPhone = '#mat-input-11';
    this.elements.idPostCode = '#mat-input-12';
    this.elements.newAdressButton = '#address';
    this.elements.myCity = '#mat-input-14';
    this.elements.mySite = '#mat-input-15';
    this.elements.submitButton = '[id="submitButton"]';
    this.elements.button11 =
      ".mat-cell.mat-cell.cdk-cell.cdk-column-Selection.mat-column-Selection.ng-star-inserted";
    this.elements.button12 =
      ".mat-focus-indicator.btn.btn-next.mat-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted";
    this.elements.button13 = '[class="mat-radio-outer-circle"]';
    this.elements.button14 =
      "button.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary";
    this.elements.addCardPayButton = "#mat-expansion-panel-header-0";
    this.elements.nameButton2 = "#mat-input-16";
    this.elements.idPayCard1 = "#mat-input-17";
    this.elements.dropdownMonth = "#mat-input-18";
    this.elements.dropdownYear = "#mat-input-19";
    this.elements.submitButton22 = '[id="submitButton"]';
    this.elements.backButton2 =
      "button.mat-focus-indicator.btn.btn-return.mat-stroked-button.mat-button-base";
    this.elements.deliveryButton2 = '[class="mat-radio-outer-circle"]';
    this.elements.conticueButton2 =
      "button.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary";
    this.elements.lastRadioButton3 = ".mat-radio-button.mat-accent";
    this.elements.conticueButton3 =
      ".mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary";
    this.elements.payOrder3 = '[id="checkoutButton"]';
    this.elements.confirm4 = '[class="confirmation"]';
  }
  getshoppingCartButton1() {
    return cy.get(this.elements.shoppingCartButton1);
  }
  getcheckoutButton1() {
    return cy.get(this.elements.checkoutButton1);
  }
  getnewAdressButton() {
    return cy.get(this.elements.newAdressButton);
  }
  getfield1() {
    return cy.get(this.elements.field1);
  }
  getcountry1() {
    return cy.get(this.elements.country1);
  }
  getnameAndLast() {
    return cy.get(this.elements.nameAndLast);
  }
  getnumberPhone() {
    return cy.get(this.elements.numberPhone);
  }
  getidPostCode() {
    return cy.get(this.elements.idPostCode);
  }
  getmyCity() {
    return cy.get(this.elements.myCity);
  }
  getmySite() {
    return cy.get(this.elements.mySite);
  }
  getsubmitButton() {
    return cy.get(this.elements.submitButton);
  }
  getsubmitButton() {
    return cy.get(this.elements.submitButton);
  }
  getsubmitButton() {
    return cy.get(this.elements.submitButton);
  }
  getsubmitButton() {
    return cy.get(this.elements.submitButton);
  }
  getbutton11() {
    return cy.get(this.elements.button11);
  }
  getbutton12() {
    return cy.get(this.elements.button12);
  }
  getbutton13() {
    return cy.get(this.elements.button13);
  }
  getbutton14() {
    return cy.get(this.elements.button14);
  }
  getaddCardPayButton() {
    return cy.get(this.elements.addCardPayButton);
  }
  getnameButton2() {
    return cy.get(this.elements.nameButton2);
  }
  getidPayCard1() {
    return cy.get(this.elements.idPayCard1);
  }
  getdropdownMonth() {
    return cy.get(this.elements.dropdownMonth);
  }
  getdropdownYear() {
    return cy.get(this.elements.dropdownYear);
  }
  getsubmitButton22() {
    return cy.get(this.elements.submitButton22);
  }
  getbackButton2() {
    return cy.get(this.elements.backButton2);
  }
  getdeliveryButton2() {
    return cy.get(this.elements.deliveryButton2);
  }
  getconticueButton2() {
    return cy.get(this.elements.conticueButton2);
  }
  getlastRadioButton3() {
    return cy.get(this.elements.lastRadioButton3);
  }
  getconticueButton3() {
    return cy.get(this.elements.conticueButton3);
  }
  getpayOrder3() {
    return cy.get(this.elements.payOrder3);
  }
  getconfirm4() {
    return cy.get(this.elements.confirm4);
  }
}
export default new SearchAutoPage();