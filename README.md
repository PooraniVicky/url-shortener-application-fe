## URL Shortener with Authentication System
This project is a URL Shortener application with a comprehensive authentication system. It includes features like Login, Registration, Forgot Password, and a URL shortening service. Users can create short URLs, track the number of clicks, and view statistics on their dashboard.
### Features
### User Authentication:
- User Registration with Email Verification
- Login with JWT Authentication
- Forgot Password with Email Recovery
- Two-Step Account Activation
### URL Shortening:
- Create Short URLs
- Redirect to Original URLs via Short URLs
- Track Click Counts for Short URLs
### Dashboard:
- Display Total Number of URLs Created Per Day
- Display URLs Created Within a Month
- View All Created URLs in a Table
### User Notifications:
- Alerts and Messages for Important Actions
### Security
- Passwords are hashed using bcrypt before being stored in the database.
- JWT tokens are used to authenticate users and protect routes.
- Activation links and password reset tokens are sent via email and have expiration times.
## Technologies Used
### Frontend
- React.js: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for the browser and Node.js.
- React Router: A standard library for routing in React.
- Bootstrap: A front-end framework for responsive design.
### Backend
- Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing user and URL data.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- bcrypt: A password hashing library.
- JWT (JSON Web Token): A library for creating and validating tokens for user authentication.
- Nodemailer: A module for sending emails (used for password recovery and account activation).

### Project Link: https://url-shortener-app-poorani.netlify.app
###
![image](https://github.com/user-attachments/assets/47e3a98f-b468-42fd-957c-d6169489c382)
