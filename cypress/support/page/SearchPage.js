import BasePage from "./BasePage";

class SearchPage extends BasePage {
  constructor() {
    super();

    this.elements.searchSmallButton =
      "#searchQuery span mat-icon.mat-icon.notranslate.mat-ripple.mat-search_icon-search.ng-tns-c254-1.material-icons.mat-ligature-font.mat-icon-no-color";
    this.elements.validationRules1 = "div.heading.mat-elevation-z6";
  }

  getearchSmallButton() {
    return cy.get(this.elements.searchSmallButton);
  }

  getvalidationRules1() {
    return cy.get(this.elements.validationRules1);
  }
}
export default new SearchPage();
