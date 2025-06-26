import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ChatHome from "./ChatHome";
import Search from "./Search";
import Chat from "./Chat";
import './App.css';
import './mainpage.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="main-hero d-flex align-items-center justify-content-center min-vh-100 bg-gradient position-relative fade-in">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0 rounded-4 p-5 text-center bg-white bg-opacity-75 animate__animated animate__fadeInDown">
              <h1 className="display-3 fw-bold mb-3 text-primary animate__animated animate__fadeIn">Welcome to <span className="text-gradient">ChatWeb</span></h1>
              <p className="lead mb-4 text-secondary animate__animated animate__fadeIn animate__delay-1s">Connect and chat with friends in real time. Secure, fast, and fun!</p>
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
                <button onClick={() => navigate('/login')} className="btn btn-primary btn-lg px-4 shadow-sm fw-semibold">Login</button>
                <button onClick={() => navigate('/signup')} className="btn btn-outline-primary btn-lg px-4 shadow-sm fw-semibold">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bubble-bg"></div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<ChatHome />} />
      <Route path="/search" element={<Search />} />
      <Route path="/chat/:email" element={<Chat />} />
    </Routes>
  );
}

export default App;
