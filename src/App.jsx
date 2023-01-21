import { useState, useEffect } from "react";
import "./App.css";
import PrivateRoutes from "./components/PrivateRoutes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setAuth] = useState(localStorage.getItem("user"));
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              React Auth
            </Link>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo02"
            >
              {isAuthenticated && (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-danger"
                      to={"/login"}
                      onClick={() => {
                        localStorage.removeItem("user");
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route exact path="/" element={<Profile />} />
              </Route>
              <Route path="/login" element={<Login setAuth={setAuth} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
