import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BACKEND_URL } from "./config";
import './mainpage.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="main-hero d-flex align-items-center justify-content-center min-vh-100 bg-gradient position-relative fade-in">
      <div className="card shadow-lg border-0 rounded-4 p-5 text-center bg-white bg-opacity-75 animate__animated animate__fadeInDown" style={{ minWidth: 350 }}>
        <h2 className="display-6 fw-bold mb-4 text-primary animate__animated animate__fadeIn">Login</h2>
        <form className="d-flex flex-column gap-4 animate__animated animate__fadeInUp animate__delay-1s" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="form-control form-control-lg mb-2 shadow-sm"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control form-control-lg mb-2 shadow-sm"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
          />
          <button
            className="btn btn-primary btn-lg px-4 shadow-sm fw-semibold mt-2 animate__animated animate__pulse animate__infinite"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <p className="mt-4 text-secondary animate__animated animate__fadeIn animate__delay-2s">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary fw-bold text-decoration-underline">Sign Up</Link>
        </p>
      </div>
      <div className="bubble-bg"></div>
    </div>
  );
}

export default Login; 