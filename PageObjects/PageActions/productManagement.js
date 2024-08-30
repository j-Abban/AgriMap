// Product Management Page Actions

class Product{
  clickOnManageProducts = () => {
    cy.get(':nth-child(9) > .ng-star-inserted > .nav-item > p').click();
  }

  clickAddProduct = () => {
    cy.get('div.md\\:text-base.text-xs.font-bold.px-4.py-1.md\\:px-7.md\\:py-2.font-sans.bg-primary-100.text-white.rounded-lg.cursor-pointer')
  .click();
  };

  productName = () => {
    cy.get('').type();
  }

  productDescription = () => {
    cy.get('').type('');
  }

  addProductImage = () => {
    cy.fixture('').upload();
  }
}
export default Product;
