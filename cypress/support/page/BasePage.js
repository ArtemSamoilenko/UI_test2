export default class BasePage {
  constructor() {
    this.elements = {};
    this.elements.headerAccountButton = 'button[id="navbarAccount"]';
    this.elements.headerLoginButton = '[id="navbarLoginButton"]';
    this.elements.popup1Button = '[aria-label="Close Welcome Banner"]';
    this.elements.popup2Button = '[aria-label="dismiss cookie message"]';
  }
  getHeaderAccountButton() {
    return cy.get(this.elements.headerAccountButton);
  }
  getHeaderLoginButton() {
    return cy.get(this.elements.headerLoginButton);
  }
  getPopup1Button() {
    return cy.get(this.elements.popup1Button);
  }
  getPopup2Button() {
    return cy.get(this.elements.popup2Button);
  }
}
