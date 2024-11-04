# Login Example with React, Axios, and React Router DOM

This repository contains a basic example of a login implementation using **React**, **Axios**, and **React Router DOM**. The login flow authenticates a user and stores the JWT token in the **local storage** for session persistence. This setup is designed to demonstrate how to manage a simple login system in a frontend React application without backend code.

## Features

- **React** for building the user interface.
- **Axios** for making HTTP requests to a sample authentication endpoint.
- **React Router DOM** for handling page navigation.
- **JWT storage** in local storage for maintaining user sessions.
- Protected route `/protected` that redirects unauthenticated users to `/login`.

## Code Explanation

In `Login.js`, you will find a commented-out section that outlines how to implement login using an API that provides user authentication details (email, password, and token). This code can be activated by replacing the mock login logic with your API endpoint:

```javascript
// import React, { useState } from "react";
// import axios from "axios";

// function Login({ setToken }) {
//   ...
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace with your authentication endpoint URL
//       const response = await axios.post("https://your-api-url.com/api/login", {
//         email,
//         password,
//       });

//       const token = response.data.token;
//       setToken(token); // Save the token in the App component's state
//       setError("");
//     } catch (err) {
//       setError("Login failed: Invalid credentials");
//     }
//   };
// }
```

For testing without an API, the uncommented code allows you to log in using the credentials `user@example.com` and `password123`, simulating a successful authentication with a fake JWT token. If you attempt to access the protected route `/protected` without being authenticated, you will be redirected to `/login`.

## How to Use

1. Clone this repository.
   ```bash
   git clone https://github.com/AngelAldaz/jwt-login-frontend.git
   ```
2. Navigate to the project directory.
   ```bash
   cd jwt-login-frontend
   ```
3. Run `npm install` to install dependencies.
   ```bash
   npm install
   ```
4. Start the application with `npm start`.
   ```bash
   npm start
   ```
5. The app will start on `http://localhost:3000`.

## Important Notes

- This example only covers the frontend implementation; the backend should handle JWT generation and validation.
- For security reasons, storing JWTs in local storage is suitable for demonstration purposes. In production, consider more secure storage methods.
