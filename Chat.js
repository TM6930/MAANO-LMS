import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    setMessages([...messages, message]);
    e.target.reset();
  };

  return (
    <section id="chat" className="chat">
      <h2>Real-Time Chat</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input type="text" name="message" placeholder="Type your message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Chat;
