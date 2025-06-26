import { useParams } from "react-router-dom";
import { useState } from "react";

function Chat() {
  const { email } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { sender: "You", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full border border-purple-100 flex flex-col h-[70vh]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-purple-700">Chat with</h2>
          <span className="text-md font-semibold text-purple-600">{email}</span>
        </div>
        <div className="flex-1 overflow-y-auto mb-4 bg-purple-50 rounded p-3">
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center">No messages yet.</p>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} className="mb-2 text-left">
                <span className="font-semibold text-purple-700">{msg.sender}: </span>
                <span>{msg.text}</span>
              </div>
            ))
          )}
        </div>
        <form className="flex gap-2" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border-2 border-purple-200 focus:border-purple-500 rounded-lg px-4 py-2 transition outline-none focus:ring-2 focus:ring-purple-200"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-purple-700 transition"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat; 