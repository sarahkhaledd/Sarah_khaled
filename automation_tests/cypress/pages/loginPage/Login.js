import { loginElements } from './LoginElements';
import { CONSTANTS } from "../../helpers/constants"; 

export default class LoginPage {
    
   static Login(username , password) {
    cy.visit(CONSTANTS.BASE_URL);
    cy.get(loginElements.USER_NAME_FIELD_ID).type(username);
    cy.get(loginElements.PASSWORD_FIELD_ID).type(password);
    cy.get(loginElements.LOGIN_BTN_ID).click();
  }

  static clickLoginButton() {
    cy.visit(CONSTANTS.BASE_URL);
    cy.get(loginElements.LOGIN_BTN_ID).click();
  }

  static navigateToLoginPage() {
    cy.visit(CONSTANTS.BASE_URL);
  }
}
