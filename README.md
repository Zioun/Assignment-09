# WSP Residential Website

Welcome to WSP Residential, a fully responsive website for property management and real estate services. This README file provides an overview of the website's features, functionalities, and deployment details.

## Website Link
[Visit WSP Residential](https://assignment-09-30e4b.web.app/)

## Features

1. **Properties Cart and View Property Page**: Explore a curated selection of properties and view detailed information about each property.
2. **Pages**:
   - Home Page
   - About Page
   - Contact Us Page (Private)
   - Update Profile Page (Private)
3. **Authentication**:
   - Firebase Auth System
   - Email and Password-Based Authentication
   - Google and GitHub Login Integration
   - Register Page with Validation (Password requirements: Uppercase, Lowercase, Minimum length of 6 characters)
   - Login Page with Error Handling
   - Deployed website on Firebase
4. **Navbar**:
   - Unique Design
   - Sections: Home, Update Profile (Private), User Profile (Conditional)
   - User Profile displays user image and name when logged in
   - Logout functionality
5. **Slider**:
   - Utilizes Swiper Slider
   - 3 Swiper Slide
6. **Footer**:
   - Includes all relevant information and eye-catching design
7. **Estate Section**:
   - Segmented by category (e.g., Residential)
   - JSON data for properties with detailed information
   - Each property card includes: Image, Title, ID, Segment, Description, Price, Status, Area, Location, Facilities, and View Property button
8. **Estate Details Page**:
   - Detailed information about selected property
   - Protected route, redirects to login page if user not logged in
9. **404 Page**:
   - Custom page for not found errors
10. **Extra Route**:
    - Additional private/protected route with meaningful content
    - Frist section 2 part (rent and sale)
    - Second section (review section)
11. **Dynamic Title**:
    - Page titles dynamically set for each page
12. **Persistent User Information**:
    - User information displayed on the navbar even after page reload
    - Loader displayed during user information loading state
13. **Show/Hide Passwords**:
    - Implemented on the registration page for password fields
14. **External Packages**:
    - Utilized `aos` package for animations
    - Utilized `react-leaflet` package for animations
    - Utilized `swiper slider` package for animations
15. **Firebase packages**:
    - Implemented protected route for user profile editing and saving using Firebase's `updateProfile()` method
16. **Image store**:
    - Hosted JSON data and images on imgbb
## Deployment
The website is deployed on Firebase and is accessible via the following link: [WSP Residential](https://assignment-09-30e4b.web.app/)

## Usage
1. Visit the website using the provided link.
2. Explore properties, navigate through pages, and utilize authentication features.
3. Enjoy the seamless user experience and access real estate information with ease.

## Contributors
- [Zioun]

## Feedback
For any feedback, suggestions, or issues, please contact [wsp@gmail.com].

Thank you for using WSP Residential! We hope you find your dream property with us.

