import React, { useState, useEffect } from "react";
import TextArea from "../components/TextArea";
import Input from "../components/Input";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleMessage = (message) => {
    // This is where you would handle the user's message and generate a response
    // For this example, we'll just add the user's message to the list of messages
    const newMessage = { text: "You: "+message, sender: "user" };

    // Add question asked to list of messages
    setMessages([...messages, newMessage]);

    // Simulate typing out the response
    const workingMessage = { text: "Bot: I'm working on it...", sender: "bot" };
    const delay = 100; // milliseconds
    const typingSpeed = 100; // characters per second
    const typingTime = workingMessage.text.length / typingSpeed * 5000;
    setTimeout(() => {
      setMessages([...messages, newMessage, workingMessage]);
    }, typingTime + delay);
  };

  return (
    <div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message here"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleMessage(event.target.value);
            event.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default Chatbot;
