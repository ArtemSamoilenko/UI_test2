export function findProduct(productName) {
  const checkPageForProduct = () => {
    cy.get("body").then((body) => {
      const products = body.find(`[alt="${productName}"]`);
      if (products.length > 0) {
        const firstProduct = cy.wrap(products.first());
        firstProduct.invoke("attr", "alt").then((altValue) => {
          cy.contains(`${productName}`)
            .parents('[class="mat-grid-tile-content"]')
            .find('[aria-label="Add to Basket"]')
            .click();
        });
      } else {
        cy.get('[aria-label="Next page"]')
          .click()
          .then(() => {
            checkPageForProduct();
          });
      }
    });
  };
  checkPageForProduct();
}

export function calculateCaptchaValue(captchaExpression) {
  try {
    const result = eval(captchaExpression);
    return result.toString();
  } catch (error) {
    console.error("Error calculating captcha expression:", error);
    return null;
  }
}
