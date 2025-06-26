import { useNavigate } from "react-router-dom";
import './mainpage.css';

function ChatHome() {
  const navigate = useNavigate();
  return (
    <div className="main-hero d-flex align-items-center justify-content-center min-vh-100 bg-gradient position-relative fade-in">
      <button
        className="btn btn-outline-secondary position-absolute top-0 end-0 m-4 px-4 py-2 fw-semibold shadow-sm animate__animated animate__fadeInDown"
        onClick={() => navigate('/login')}
      >
        Log Out
      </button>
      <div className="card shadow-lg border-0 rounded-4 p-5 text-center bg-white bg-opacity-75 animate__animated animate__fadeInDown">
        <h1 className="display-4 fw-bold mb-3 text-primary animate__animated animate__fadeIn">Welcome to <span className="text-gradient">ChatWeb</span>!</h1>
        <p className="lead mb-4 text-secondary animate__animated animate__fadeIn animate__delay-1s">You are now logged in. Start chatting with your friends in real time!</p>
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
          <button
            className="btn btn-primary btn-lg px-4 shadow-sm fw-semibold"
            onClick={() => navigate('/search')}
          >
            Start Chatting
          </button>
        </div>
      </div>
      <div className="bubble-bg"></div>
    </div>
  );
}

export default ChatHome; 