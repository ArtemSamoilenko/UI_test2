import BasePage from "./BasePage";

class CaptchaPage extends BasePage {
  constructor() {
    super();
    this.elements.burgerMenu = "mat-toolbar-row button:nth-child(1)";
    this.elements.feedback = "a:nth-child(6)";
    this.elements.comment = 'textarea[id="comment"]';
    this.elements.fiveStars = '[aria-label="Slider for selecting the star rating"]';
    this.elements.validation234 = '[id="cdk-overlay-4"]';
  }

  geburgerMenu() {
    return cy.get(this.elements.burgerMenu);
  }
  getfeedback() {
    return cy.get(this.elements.feedback);
  }
  getcomment() {
    return cy.get(this.elements.comment);
  }
  getfiveStars() {
    return cy.get(this.elements.fiveStars);
  }
  getvalidation234() {
    return cy.get(this.elements.validation234);
  }
}
export default new CaptchaPage();
