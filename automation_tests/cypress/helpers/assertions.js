import { productElements } from "../pages/productPage/ProductElements"; 
import { loginElements } from '../pages/loginPage/LoginElements';
import { CONSTANTS } from "./constants"; 

export const assertProductsPageTitleExists = () => {
    cy.contains(productElements.PRODUCTS_PAGE_TITLE).should("exist");
};

export const assertLockedUserErrorMessageExists = () => {
    cy.contains(CONSTANTS.ERROR_MESSAGE_FOR_LOCKED_USER_TEXT).should("exist");
};

export const assertInvalidUserCredintailsErrorMessageExists = () => {
    cy.contains(CONSTANTS.ERROR_MESSAGE_FOR_INVALID_CREDINTAILS).should("exist");
};

export const assertLoginPageIsDisplayed = () => {
    cy.url().should('include', CONSTANTS.BASE_URL);
};

export const assertUserNameRequiredFieldErrorMessageExists = () => {
    cy.contains(CONSTANTS.ERROR_MESSAGE_FOR_USER_NAME_FIELD_REQUIRED).should("exist");
};

export const assertPasswordRequiredFieldErrorMessageExists = () => {
    cy.contains(CONSTANTS.ERROR_MESSAGE_FOR_PASSWORD_FIELD_REQUIRED).should("exist");
};

export const assertProductPageUnauthorizedBehavior = () => {
    cy.request({
        url: CONSTANTS.PRODUCT_URL,
        failOnStatusCode: false
      }).then((response) => {
        expect(response).to.be.not.undefined;
        if (response) {
          expect(response.status.toString()).to.equal('404');
        }
      });
};

// ---------------- UI Assertions ---------------------------------------------- //

export const assertOnLoginPageTitle = () => {
    cy.get(loginElements.LOGIN_LOGO_DIV).should('exist');
    cy.get(loginElements.LOGIN_LOGO_DIV).should('have.text', CONSTANTS.LOGIN_TITLE);
};

export const assertOnUserNameFieldExistsOnLoginPage = () => {
    cy.get(loginElements.USER_NAME_FIELD_ID).should('exist');
};

export const assertOnPasswordFieldExistsOnLoginPage = () => {
    cy.get(loginElements.PASSWORD_FIELD_ID).should('exist');
};

export const assertOnLoginButtonExistsOnLoginPage = () => {
    cy.get(loginElements.LOGIN_BTN_ID).should('exist');
};

export const assertOnPasswordButtonIsClickable = () => {
    cy.get(loginElements.LOGIN_BTN_ID).should('not.be.disabled');
    cy.get(loginElements.LOGIN_BTN_ID).click();
};