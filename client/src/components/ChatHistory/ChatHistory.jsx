import React from "react";

import "./ChatHistory.scss";
import Message from "../Message";

const ChatHistory = (props) => {
  const messages = props.chatHistory.map((msg, index) => (
    <Message key={index} messages={msg.data} />
  ));

  return (
    <div className="ChatHistory">
      <h2>ChatHistory</h2>
      {messages}
    </div>
  );
};

export default ChatHistory;
