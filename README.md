# Two-Factor Authentication Project

## Overview
This project implements a two-factor authentication system using Node.js, Express, SQLite, and Sequelize. The system supports email-based verification to enhance security for user authentication.

## Features
- **User Registration**: New users can register with a username, password, and email.
- **Email Verification**: Users receive an email with a verification link upon registration.
- **User Login**: Verified users can log in with their credentials.
- **User Logout**: Users can securely log out from their session.
- **Session Management**: Secure session management using express-session.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: SQLite, Sequelize ORM
- **Authentication**: Passport.js, bcrypt, nodemailer
- **Environment Variables**: dotenv

## Installation
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/two-factor-authentication.git
    cd two-factor-authentication
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Configure Environment Variables**:
    - Create a `.env` file in the root directory and add the following:
        ```plaintext
        PORT=5000
        SESSION_SECRET=your-session-secret
        JWT_SECRET=your-jwt-secret
        DB_STORAGE=./database.sqlite
        EMAIL_USER=your-email@gmail.com
        EMAIL_PASS=your-email-password
        ```

4. **Run the Server**:
    ```bash
    npm run dev
    ```

## API Endpoints
- **Register**:
    - URL: `POST /api/auth/register`
    - Body:
        ```json
        {
            "username": "exampleUser",
            "password": "examplePassword",
            "email": "example@example.com"
        }
        ```
    - Response:
        ```json
        {
            "message": "Registration successful. Please check your email for verification link."
        }
        ```

- **Verify Email**:
    - URL: `GET /api/auth/verify/:token`
    - Response:
        ```json
        {
            "message": "Email verified successfully"
        }
        ```

- **Login**:
    - URL: `POST /api/auth/login`
    - Body:
        ```json
        {
            "username": "exampleUser",
            "password": "examplePassword"
        }
        ```
    - Response:
        ```json
        {
            "message": "Logged in successfully"
        }
        ```

- **Logout**:
    - URL: `POST /api/auth/logout`
    - Response:
        ```json
        {
            "message": "Logged out successfully"
        }
        ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
