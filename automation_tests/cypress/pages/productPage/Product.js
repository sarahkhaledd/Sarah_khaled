import { CONSTANTS } from "../../helpers/constants"; 

export default class ProductPage {

  static navigateToProductPage() {
    cy.visit(CONSTANTS.PRODUCT_URL);
  }
}