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

### High Priority

1. **Third-Party Account Authentication:**
   - *Scenario:* Refer to the detailed scenario in the [Authentication section](#authentication).

2. **SignIn with Email/Password:**
   - *Scenario:* Refer to the detailed scenario in the [Authentication section](#authentication).

3. **SignIn with Email/Password (Invalid Credentials):**
   - *Scenario:* Refer to the detailed scenario in the [Authentication section](#authentication).

4. **Task Management:**
    - *Scenario:* Refer to the detailed scenario in the [Tasks within Lists section](#tasks-within-lists).

5. **Navigate to My Day:**
   - *Scenario:* Refer to the detailed scenario in the [Bottom Bar section](#bottom-bar). 
  
6. **Calendar Integration:**
    - *Scenario:* Refer to the detailed scenario in the [Mobile App Testing Scenarios section](#mobile-app-testing-scenarios).

7. **App Launch and Close:**
    - *Scenario:* Refer to the detailed scenario in the [Mobile App Testing Scenarios section](#mobile-app-testing-scenarios).

### Medium Priority

8. **Navigation to Lists:**
   - *Scenario:* Refer to the detailed scenario in the [Home Page section](#home-page).

9. **Search Functionality:**
   - *Scenario:* Refer to the detailed scenario in the [Home Page section](#home-page).

10. **List Management:**
    - *Scenario:* Refer to the detailed scenario in the [Lists section](#lists).

11. **Task Organization:**
    - *Scenario:* Refer to the detailed scenario in the [Tasks within Lists section](#tasks-within-lists).

12. **Navigate to Next 7 Days:**
   - *Scenario:* Refer to the detailed scenario in the [Bottom Bar section](#bottom-bar).

13. **Daily Push Notification:**
    - *Scenario:* Refer to the detailed scenario in the [Settings Page section](#settings-page).
   
14. **Screen Sizing and Adaptability:**
    - *Scenario:* Refer to the detailed scenario in the [Mobile App Testing Scenarios section](#mobile-app-testing-scenarios).

15. **Performance on Various Networks (including No Internet):**
    - *Scenario:* Refer to the detailed scenario in the [Mobile App Testing Scenarios section](#mobile-app-testing-scenarios).

### Low Priority

16. **Task Sorting and Filtering:**
    - *Scenario:* Refer to the detailed scenario in the [Tasks within Lists section](#tasks-within-lists).

17. **Profile Information:**
    - *Scenario:* Refer to the detailed scenario in the [Settings Page section](#settings-page).

18. **Integration with WhatsApp:**
    - *Scenario:* Refer to the detailed scenario in the [Settings Page section](#settings-page).

19. **Integration with Slack:**
    - *Scenario:* Refer to the detailed scenario in the [Settings Page section](#settings-page).

20. **Change Language:**
    - *Scenario:* Refer to the detailed scenario in the [Settings Page section](#settings-page).

21. **Change Sounds:**
    - *Scenario:* Refer to the detailed scenario in the [Settings Page section](#settings-page).

22. **Support Section:**
    - *Scenario:* Refer to the detailed scenario in the [Settings Page section](#settings-page).

23. **Default List Setting:**
    - *Scenario:* Refer to the detailed scenario in the [Settings Page section](#settings-page).

24. **Completed Task Management:**
    - *Scenario:* Refer to the detailed scenario in the [Settings Page section](#settings-page).

27. **Localization:**
    - *Scenario:* Refer to the detailed scenario in the [Mobile App Testing Scenarios section](#mobile-app-testing-scenarios).

28. **Battery Consumption:**
    - *Scenario:* Refer to the detailed scenario in the [Mobile App Testing Scenarios section](#mobile-app-testing-scenarios).

29. **Access Calendar Section:**
    - *Scenario:* Refer to the detailed scenario in the [Bottom Bar section](#bottom-bar).



## Bugs Found

## Bug 1: (UX - Sign in with facebook) The "Ok" toast was displayed when I cancelled the sign in with facebook

**Description:**
The "Ok" toast is displayed when I click on the "Cancel" button in the settings toast while attempting to sign in with a Facebook account.

**Environment:**
- Device: iPhone 13
- iOS Version: 16.7.2
  
**Steps to Reproduce:**
1. Launch the app.
2. Click on the facebook icon.
3. Click on the cancel button.

**Expected Result:**
- The user should navigato to home screen without displaying any toast message when i clicked on the cancel button 

**Actual Result:**
- The "Ok" toast message is displayed when i clicked on the cancel button

**Priority:** Medium

**Severity:** Minor

**Screen Recording:**

https://github.com/sarahkhaledd/Sarah_khaled/assets/61946261/f8786c5b-e289-486f-83c4-d298e290d9b5


## Bug 2: (Forget password page) the app suspension after resetting the password

**Description:**
The app is suspended on the "Check your inbox..." screen after resetting the password through Gmail. This prevents navigation through the app until it is closed and reopened.

**Prerequisites:**
You have an account.

**Steps:**
1. Launch the app.
2. Click on the email icon.
3. Insert an email.
4. Click on "Forget Password."
5. Reset the password through Gmail.

**Expected Result:**
Automatically redirected to the login screen and successfully log in with the new password.

**Actual Result:**
After setting the new password and automatic redirection to the app, the screen is suspended, and navigation through the app is not possible.

**Environment:**
- Device: iPhone 13
- iOS Version: 16.7.2

**Priority:** Medium  
**Severity:** Major


**Screen Recording:**

https://drive.google.com/file/d/11K7qLFpQY4ZkU05YZGn3ZtwgJ1hChFWJ/view?usp=sharing


## Bug 3: (Localization - Arabic Version) Incorrect Localization on Settings Page 

**Prerequisites:**
You have an account, and the app is in the English version.

**Steps:**
1. Login.
2. Choose any list on the home page.
3. Click on the settings button.
4. Choose Arabic language.

**Expected Result:**
The setting page contents are localized correctly.

**Actual Result:**
The title "Settings" and "Account" are not localized.

**Environment:**
- Device: iPhone 13
- iOS Version: 16.7.2

**Priority:** Medium  
**Severity:** Minor

**Screen Shot:**
![Bug4](https://github.com/sarahkhaledd/Sarah_khaled/assets/61946261/e4980c99-8331-49ab-ab72-a0a4115bf0c9)


## Bug 4: (Settings page - My Day Reset Time) Several toasts appeared when I clicked the My Day Reset Time button multiple times.

**Prerequisites:**
You have an account.

**Steps:**
1. Open the app.
2. Login.
3. Navigate to the settings screen.
4. Click on the "My Day Reset Time" button multiple times at the same moment.

**Expected Result:**
The time toast is displayed once.

**Actual Result:**
The time toast is displayed multiple times, overlapping each other, and cannot be closed.

**Environment:**
- Device: iPhone 13
- iOS Version: 16.7.2

**Priority:** Low  
**Severity:** Minor

**Screen Recording:**

https://github.com/sarahkhaledd/Sarah_khaled/assets/61946261/f74c0fc0-b3ca-492e-a0d5-10d5b3317b01


## Bug 5: (Sign-in/up - without internet) An unclear error message is displayed when there is no internet network.

**Steps:**
1. Disconnect the internet from the mobile.
2. Open the app.
3. Click on the email icon.
4. Insert an email.
5. Click the enter button.

**Expected Result:**
The error message for an internet issue is displayed.

**Actual Result:**
The "Couldn't connect to server" message is displayed.

**Environment:**
- Device: iPhone 13
- iOS Version: 16.7.2
- Network: No internet connectivity

**Priority:** Low  
**Severity:** Trivial

**Screen Recording:**

[Uploading Bug5.MP4…
](https://github.com/sarahkhaledd/Sarah_khaled/assets/61946261/81c4bc50-52b2-4a10-ad4e-b87faab14979
)

## Bug 6: (List page - suggested items) The selection of suggested items removes others.

**Description:**
When selecting all suggested items and then searching for another item, choosing one from the new suggestions, removes all other items suggested.

**Steps to Reproduce:**
1. Login.
2. Choose any list at your home page.
3. Add new tasks from selecting all items suggested.
4. Search for another item.
5. Choose one item from the new suggested list.

**Actual Result:**
All other items are removed when choosing one from the new suggestions.

**Expected Result:**
The other items are kept until i change the word.

**Priority:** Low  
**Severity:** Minor

**Screen Recording:**

https://github.com/sarahkhaledd/Sarah_khaled/assets/61946261/33bb578d-33ae-4158-a53a-a0e451f05b00


## Bug 7: (Task page - Reminder) The keyboard overlapping reminder pop-up

**Description:**
The keyboard is overlapping the reminder pop-up when it's opening, and I clicked on the "Reminder" button.

**Prerequisites:**
You have tasks created and an account.

**Steps to Reproduce:**
1. Login.
2. Choose list at your home page.
3. Choose task from the list.
4. Click on the notes section.
5. Click on the "Reminder at" button.

**Expected Result:**
The keyboard is closed, and the reminder pop-up is opened.

**Actual Result:**
The keyboard is overlapping the reminder pop-up.

**Priority:** Medium  
**Severity:** Minor

**Screen Recording:**

https://drive.google.com/file/d/1YExPUQ04TeGrrPNLba3jvfGmBN36YnQK/view?usp=sharing


## Bug 8: (Search on tasks) The search result is reset when keyboard is closed

**Description:**
The search result is reset when closing the keyboard.

**Prerequisites:**
You have tasks created and an account.

**Steps to Reproduce:**
1. Login.
2. Click on "My Day" at the bottom bar.
3. Click on the blue circle.
4. Search for a task.
5. Close the keyboard.

**Expected Result:**
The result of the search is kept whether the keyboard is opened or closed.

**Actual Result:**
The result of the search is reset once the keyboard is closed.

**Priority:**  High
**Severity:** Minor

**Screen Recording:**

https://drive.google.com/file/d/169F_5srEHC2Qq2p1sXW4DEWFZWQpq0hZ/view?usp=sharing

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

