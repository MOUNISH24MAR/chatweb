import { useState } from "react";
import './mainpage.css';

function Search() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);
    setMessages([]);
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/auth/search?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      if (res.ok) {
        setUser(data);
      } else {
        setError(data.message || "No such user exists");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { sender: "You", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="main-hero d-flex align-items-center justify-content-center min-vh-100 bg-gradient position-relative fade-in">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0 rounded-4 p-5 text-center bg-white bg-opacity-75 animate__animated animate__fadeInDown mb-4">
              <h2 className="display-6 fw-bold mb-4 text-primary animate__animated animate__fadeIn">Search User by Email</h2>
              <form className="d-flex flex-column flex-md-row gap-3 justify-content-center animate__animated animate__fadeInUp animate__delay-1s" onSubmit={handleSearch}>
                <input
                  type="email"
                  placeholder="Enter user email"
                  className="form-control form-control-lg shadow-sm"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                />
                <button className="btn btn-primary btn-lg px-4 shadow-sm fw-semibold" type="submit" disabled={loading}>
                  {loading ? "Searching..." : "Search"}
                </button>
              </form>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
            {user && (
              <div className="card shadow-lg border-0 rounded-4 p-4 bg-white bg-opacity-75 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="d-flex align-items-center mb-3 justify-content-between">
                  <h4 className="fw-bold text-gradient mb-0">Chat with {user.username} ({user.email})</h4>
                </div>
                <div className="chat-box mb-3 p-3 bg-light rounded" style={{ minHeight: 200, maxHeight: 300, overflowY: 'auto' }}>
                  {messages.length === 0 ? (
                    <p className="text-secondary text-center">No messages yet. Start the conversation!</p>
                  ) : (
                    messages.map((msg, idx) => (
                      <div key={idx} className={`d-flex ${msg.sender === 'You' ? 'justify-content-end' : 'justify-content-start'}`}>
                        <div className={`mb-2 px-3 py-2 rounded-pill ${msg.sender === 'You' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}
                          style={{ maxWidth: '70%' }}>
                          <span className="fw-semibold">{msg.sender}: </span>
                          <span>{msg.text}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <form className="d-flex gap-2" onSubmit={handleSend}>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="form-control form-control-lg shadow-sm"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <button className="btn btn-primary btn-lg px-4 fw-semibold" type="submit">
                    Send
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bubble-bg"></div>
    </div>
  );
}

export default Search; 