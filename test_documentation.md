# Test Documentaion

## Table of Contents
- [Scenarios](#scenarios)
- [Scenarios Prioritization](#scenarios-prioritization)
- [Bugs Found](#bugs-found)
- [Detailed Test Cases](#detailed-test-cases)

## Scenarios

### Scenario 1: User Authentication
...

## Scenarios Prioritization
...

## Bugs Found

### Bug 1: Issue with User Registration
...

## Detailed Test Cases

## 4. Detailed Test Cases


### Common Preconditions:
- User is on the login page.


### Test Case 1: Successful Login with Standard User
- **ID:** TC001
- **Priority:** High
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter a valid standard user name.
  3. Enter a valid password.
  4. Click on the "Login" button.
- **Expected Result:**
  - Successful login,
  - and navigation to the product page.

### Test Case 2: Successful Login with Error User
- **ID:** TC002
- **Priority:** High
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter a valid error user name.
  3. Enter a valid password.
  4. Click on the "Login" button.
- **Expected Result:**
  - Successful login,
  - and navigation to the product page.

### Test Case 3: Successful Login with Performance User
- **ID:** TC003
- **Priority:** High
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter a valid performance user name.
  3. Enter a valid password.
  4. Click on the "Login" button.
- **Expected Result:**
  - Successful login,
  - and navigation to the product page.

### Test Case 4: Successful Login with Visual User
- **ID:** TC004
- **Priority:** High
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter a valid visual user name.
  3. Enter a valid password.
  4. Click on the "Login" button.
- **Expected Result:**
  - Successful login,
  - and navigation to the product page.

### Test Case 5: Successful Login with Problem User
- **ID:** TC005
- **Priority:** High
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter a valid problem user name.
  3. Enter a valid password.
  4. Click on the "Login" button.
- **Expected Result:**
  - Login page is displayed.
  - Unauthorized error message is displayed.

### Test Case 6: Unauthorized Behavior on Navigating to Product Page
- **ID:** TC006
- **Priority:** High
- **Steps:**
  1. Open the Saucedemo website.
  2. Navigate to the product page without logging in.
- **Expected Result:**
  - Error message is displayed
  - and kept on login page.

### Test Case 7: Error Message for Invalid User Credentials
- **ID:** TC007
- **Priority:** Medium
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter an invalid username.
  3. Enter a valid password.
  4. Click on the "Login" button.
- **Expected Result:**
  - Error message is displayed.
  - The user can't login and is kept on the login page.

### Test Case 8: Error Message for Invalid Password
- **ID:** TC008
- **Priority:** Medium
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter a valid username.
  3. Enter an invalid password.
  4. Click on the "Login" button.
- **Expected Result:**
  - Error message is displayed.
  - The user can't login and is kept on the login page.

### Test Case 9: Error Message for Invalid Password and User
- **ID:** TC009
- **Priority:** Medium
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter an invalid username.
  3. Enter an invalid password.
  4. Click on the "Login" button.
- **Expected Result:**
  - Error message is displayed.
  - The user can't login and is kept on the login page.
 
    
### Test Case 10: Error Message for Empty Fields
- **ID:** TC010
- **Priority:** Medium
- **Steps:**
  1. Open the Saucedemo website.
  2. Leave both username and password fields empty.
  3. Click on the "Login" button.
- **Expected Result:**
  - Error message is displayed.
  - Login page is kept.

### Test Case 11: Error Message for Valid User and Empty Password
- **ID:** TC011
- **Priority:** Medium
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter a valid username.
  3. Leave the password field empty.
  4. Click on the "Login" button.
- **Expected Result:**
  - Error message is displayed.
  - Login page is kept.

### Test Case 12: Error Message for Locked Out User
- **ID:** TC012
- **Priority:** Medium
- **Steps:**
  1. Open the Saucedemo website.
  2. Enter a locked-out user name.
  3. Enter a valid password.
  4. Click on the "Login" button.
- **Expected Result:**
- Successful login
- and navigation to the product page.


### Test Case 13: Login Title Visibility on Login Page
- **ID:** TC013
- **Priority:** Low
- **Steps:**
  1. Open the Saucedemo website.
  2. Verify the visibility of the login title and the text.
- **Expected Result:**
  - Login title is rendered and visible.

### Test Case 14: User Name Field Visibility on Login Page
- **ID:** TC014
- **Priority:** Low
- **Steps:**
  1. Open the Saucedemo website.
  2. Verify the visibility of the user name field.
- **Expected Result:**
  - User name field is visible.

### Test Case 15: Password Field Visibility on Login Page
- **ID:** TC015
- **Priority:** Low
- **Steps:**
  1. Open the Saucedemo website.
  2. Verify the visibility of the password field.
- **Expected Result:**
  - Password field is visible.

### Test Case 16: Login Button Visibility on Login Page
- **ID:** TC016
- **Priority:** Low
- **Steps:**
  1. Open the Saucedemo website.
  2. Verify the visibility of the login button.
- **Expected Result:**
  - Login button is visible.

### Test Case 17: Login Button Clickability
- **ID:** TC017
- **Priority:** Low
- **Steps:**
  1. Open the Saucedemo website.
  2. Verify the clickability of the login button.
- **Expected Result:**
  - Login button is clickable.

### Test Case 18: Elements Display Correctly on Small Screen
- **ID:** TC018
- **Priority:** Low
- **Steps:**
  1. Open the Saucedemo website.
  2. View the page on a small screen (e.g., iPhone 6).
- **Expected Result:**
  - Elements display correctly.
  - Switch back to the original screen size.

