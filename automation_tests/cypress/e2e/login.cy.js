import LoginPage from "../pages/loginPage/Login";

import * as assertions from "../helpers/assertions";
import users from "../fixtures/users.json";

describe("Swag Labs Login Test Scenarios", () => {

  it("given_validStandardUserCredentials_when_loginButtonClicked_then_successfulLogin_navigate_to_productPage", () => {
    LoginPage.Login(users.standardUserName,users.password);
    assertions.assertProductsPageTitleExists();
  });

  it("given_validErrorUserCredentials_when_loginButtonClicked_then_SuccessfulLogin_navigate_to_productPage", () => {
    LoginPage.Login(users.errorUserName,users.password);
    assertions.assertProductsPageTitleExists();
    });
  
  it("given_validPerformanceUserCredentials_when_loginButtonClicked_then_SuccessfulLogin_navigate_to_productPage", () => {
    LoginPage.Login(users.performanceGlitchUserName,users.password);
    assertions.assertProductsPageTitleExists();
    });
  
  it("given_validVisualUserCredentials_when_loginButtonClicked_then_SuccessfulLogin_navigate_to_productPage", () => {
    LoginPage.Login(users.visualUserName,users.password);
    assertions.assertProductsPageTitleExists();
    });

  it("given_validProblemUserCredentials_when_loginButtonClicked_then_successfulLogin_navigate_to_productPage", () => {
    LoginPage.Login(users.problemUserName,users.password);
    assertions.assertProductsPageTitleExists();
  });

  it("given_lockedOutUserCredentials_when_loginButtonClicked_then_errorMessage_isDisplay", () => {
    LoginPage.Login(users.lockedOutUserName,users.password);
    assertions.assertLockedUserErrorMessageExists();
    });

  it("given_invalidUserNameCredentials_whenLoginButtonClicked_thenErrorMessage_isDisplayed_andLoginPage_isKept", () => {
    LoginPage.Login(users.inValidUser,users.password);
    assertions.assertInvalidUserCredintailsErrorMessageExists();
    assertions.assertLoginPageIsDisplayed();
    });

  it("given_invalidPasswordCredentials_whenLoginButtonClicked_thenErrorMessage_isDisplayed_andLoginPage_isKept", () => {
    LoginPage.Login(users.standardUserName,users.inPassword);
    assertions.assertInvalidUserCredintailsErrorMessageExists();
    assertions.assertLoginPageIsDisplayed();
    });
  
  it("given_invalidPasswordAndUserNameCredentials_whenLoginButtonClicked_thenErrorMessage_isDisplayed_andLoginPage_isKept", () => {
    LoginPage.Login(users.inValidUser,users.inPassword);
    assertions.assertInvalidUserCredintailsErrorMessageExists();
    assertions.assertLoginPageIsDisplayed();
    });

  it("given_emptyFields_whenLoginButtonClicked_thenErrorMessage_isDisplayed_andLoginPage_isKept", () => {
    LoginPage.clickLoginButton();
    assertions.assertUserNameRequiredFieldErrorMessageExists();
    assertions.assertLoginPageIsDisplayed();
    });

  it("given_validUserCredentials_andEmptyPassword_whenLoginButtonClicked_thenErrorMessage_isDisplayed_andLoginPage_isKept", () => {
    LoginPage.Login(users.standardUserName,'\n');
    assertions.assertPasswordRequiredFieldErrorMessageExists();
    assertions.assertLoginPageIsDisplayed();
    });

  it("given_withoutLoggedIn_whenNavigatingToProductPage_thenLoginPage_andErrorMessage_areDisplayed", () => {
    assertions.assertProductPageUnauthorizedBehavior()
    });
})