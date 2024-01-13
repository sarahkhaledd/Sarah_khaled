# Test Documentaion

## Table of Contents
- [Scenarios](#scenarios)
- [Scenarios Prioritization](#scenarios-prioritization)
- [Bugs Found](#bugs-found)
- [Detailed Test Cases](#detailed-test-cases)

## Test Scenarios for To-Do Mobile Application

# Scenarios

### Authentication

1. **Third-Party Account Authentication:**
   - *Scenario:* Allow users to sign in using third-party authentication (Google, Apple, Facebook).
   - *Details:* Verify the seamless authentication process and navigation to the home screen.

2. **SignIn with Email/Password:**
   - *Scenario:* Verify users can log in using their email and password.
   - *Details:* Confirm that the app navigates to the home screen after a successful login.

3. **SignIn with Email/Password (Invalid Credentials):**
   - *Scenario:* Attempt login with invalid email and password.
   - *Details:* Confirm that the app displays an appropriate error message and doesn't allow access with incorrect credentials.

### Home Page

4. **Navigation to Lists:**
   - *Scenario:* Verify users can navigate to different lists from the home page.
   - *Details:* Verify the smooth transition to various lists.

5. **Search Functionality:**
   - *Scenario:* Confirm the search bar accurately retrieves tasks, events, and notes.
   - *Details:* Confirm precise search results for tasks, events, and notes.

### Bottom Bar

6. **Navigate to My Day:**
   - *Scenario:* Verify the "My Day" button navigates users to their today's tasks.
   - *Details:* Verify correct redirection to tasks scheduled for the day.

7. **Navigate to Next 7 Days:**
   - *Scenario:* Users can view tasks for the next 7 days.
   - *Details:* Confirm the accurate display of tasks for the upcoming week.

8. **Navigate to All Tasks:**
   - *Scenario:* The "All Tasks" button correctly displays all tasks.
   - *Details:* Ensure accurate presentation of all tasks in a consolidated view.

9. **Access Calendar Section:**
   - *Scenario:* Verify users can access the calendar section from the bottom bar.
   - *Details:* Verify successful navigation to the calendar section.

### Lists

10. **List Management:**
    - *Scenario:* Test sorting, filtering, renaming, deleting, importing, printing, syncing, and sharing lists.
    - *Details:* Ensure each list management function operates correctly.

### Tasks within Lists

11. **Task Organization:**
    - *Scenario:* Confirm tasks within lists are correctly organized as Today, Tomorrow, Upcoming, and Someday.
    - *Details:* Verify the proper categorization of tasks.

12. **Task Management:**
    - *Scenario:* Test deleting, renaming, adding reminders, adding locations, changing lists, adding tags, adding subtasks, and adding notes for each task.
    - *Details:* Ensure each task management function operates as intended.

13. **Task Sorting and Filtering:**
    - *Scenario:* Test the ability to sort tasks based on different criteria and filter tasks based on specific criteria.
    - *Details:* Confirm the accuracy of task sorting and filtering.

### Settings Page

14. **Profile Information:**
    - *Scenario:* Users can change their profile information in the settings page.
    - *Details:* Verify successful updating of profile information.

15. **Integration with WhatsApp:**
    - *Scenario:* Confirm integration with WhatsApp works as intended.
    - *Details:* Ensure seamless communication with WhatsApp.

16. **Integration with Slack:**
    - *Scenario:* Ensure integration with Slack functions correctly.
    - *Details:* Confirm smooth collaboration with Slack.

17. **Change Language:**
    - *Scenario:* Verify users can change the language preference in the settings.
    - *Details:* Verify the app adapts to different language settings.

18. **Change Sounds:**
    - *Scenario:* Test changing sounds for notifications.
    - *Details:* Confirm the proper functioning of sound changes.

19. **Support Section:**
    - *Scenario:* Confirm users can access support information.
    - *Details:* Verify successful access to support resources.

20. **Default List Setting:**
    - *Scenario:* Users can set a default list for new tasks.
    - *Details:* Confirm the correct assignment of default lists.

21. **Completed Task Management:**
    - *Scenario:* Test options for managing completed tasks.
    - *Details:* Ensure accurate management of completed tasks.

22. **Daily Push Notification:**
    - *Scenario:* Users receive daily push notifications as configured.
    - *Details:* Confirm timely receipt of push notifications.

### Mobile App Testing Scenarios

23. **Calendar Integration:**
    - *Scenario:* Confirm that tasks with due dates are correctly added to the user's Gmail calendar.
    - *Details:* Ensure seamless integration with the Gmail calendar.

24. **Push Notifications:**
    - *Scenario:* Users receive push notifications as per the configured settings.
    - *Details:* Test different notification types, frequency, and content for a smooth experience.

25. **Notification Handling:**
    - *Scenario:* Users receive timely notifications for upcoming tasks, reminders, and changes made by collaborators.
    - *Details:* Confirm the correct handling of notifications.

26. **App Launch and Close:**
    - *Scenario:* Confirm the app launches smoothly and closes without errors, providing a seamless user experience.
    - *Details:* Ensure a glitch-free app launch and closure.

27. **Localization:**
    - *Scenario:* Verify that the app supports different languages and adapts to various regional settings.
    - *Details:* Confirm proper localization for diverse language and regional preferences.

28. **Battery Consumption:**
    - *Scenario:* Assess the app's impact on device battery consumption during regular usage.
    - *Details:* Monitor battery usage patterns for optimal power efficiency.

29. **Screen Sizing and Adaptability:**
    - *Scenario:* Verify the app's display is adaptable to various screen sizes and orientations.
    - *Details:* Test on different devices and screen sizes for a consistent and user-friendly display.

30. **Performance on Various Networks (including No Internet):**
    - *Scenario:* Evaluate app performance under different network conditions (1G, 2G, 3G, 4G), including scenarios with no internet connectivity.
    - *Details:* Measure response times and assess overall functionality for a smooth user experience across varying network speeds.

      
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

