import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate(); // Hook para redirección

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    navigate("/login"); // Redirige a /login después de hacer logout
  };

  return (
    <div>
      {token && <button onClick={handleLogout}>Logout</button>}
      <Routes>
        {/* Ruta de login, solo visible cuando no hay token */}
        <Route
          path="/login"
          element={
            token ? <Navigate to="/protected" /> : <Login setToken={setToken} />
          }
        />

        {/* Ruta protegida */}
        <Route
          path="/protected"
          element={
            <PrivateRoute>
              <ProtectedPage />
            </PrivateRoute>
          }
        />

        {/* Ruta raíz que redirige al login o a la página protegida según el estado de autenticación */}
        <Route
          path="/"
          element={
            token ? <Navigate to="/protected" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
}

// Componente para la página protegida
function ProtectedPage() {
  return (
    <h2>
      Esta es una página protegida. Solo usuarios autenticados pueden verla.
    </h2>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
