// import React, { useState } from "react";
// import axios from "axios";

// function Login({ setToken }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Reemplaza con tu URL del endpoint de autenticación
//       const response = await axios.post("https://your-api-url.com/api/login", {
//         email,
//         password,
//       });

//       const token = response.data.token;
//       setToken(token); // Guarda el token en el estado del componente App
//       setError("");
//     } catch (err) {
//       setError("Login failed: Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Función simulada para hacer login
  const mockLogin = (email, password) => {
    // Condición simple para simular autenticación exitosa
    if (email === "user@example.com" && password === "password123") {
      // Simulamos un token (en un caso real, vendría del servidor)
      return { token: "fake-jwt-token" };
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = mockLogin(email, password);
      setToken(response.token); // Guarda el token falso en el estado global
      setError("");
    } catch (err) {
      setError("Login failed: Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
