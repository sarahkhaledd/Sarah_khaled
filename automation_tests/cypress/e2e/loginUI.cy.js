import LoginPage from "../pages/loginPage/Login";
import * as assertions from "../helpers/assertions";

describe("Swag Labs Login UI Test Suits", () => {

  it("given_userIsOnLoginPage_when_loginTitleIsRendered_then_titleShouldBeVisible", () => {
    LoginPage.navigateToLoginPage();
    assertions.assertOnLoginPageTitle();
  });

  it("given_userIsOnLoginPage_when_userNameFieldExists_then_userNameFieldShouldBeVisible", () => {
    LoginPage.navigateToLoginPage();
    assertions.assertOnUserNameFieldExistsOnLoginPage();
  });

  it("given_userIsOnLoginPage_when_passwordFieldExists_then_passwordFieldShouldBeVisible", () => {
    LoginPage.navigateToLoginPage();
    assertions.assertOnPasswordFieldExistsOnLoginPage();
  });

  it("given_userIsOnLoginPage_when_loginButtonExists_then_loginButtonShouldBeVisible", () => {
    LoginPage.navigateToLoginPage();
    assertions.assertOnLoginButtonExistsOnLoginPage();
  });

  it("given_userIsOnLoginPage_when_loginButtonExists_then_loginButton_isClickable", () => {
    LoginPage.navigateToLoginPage();
    assertions.assertOnPasswordButtonIsClickable();
  });

  it("given_userIsOnLoginPage_when_viewingOnSmallScreen_then_ElementsShouldDisplayCorrectly", () => {
    LoginPage.navigateToLoginPage();
    cy.viewport('iphone-6');
    assertions.assertOnUserNameFieldExistsOnLoginPage();
    assertions.assertOnPasswordFieldExistsOnLoginPage();
    assertions.assertOnLoginButtonExistsOnLoginPage();
    cy.viewport('macbook-13');
  });
})