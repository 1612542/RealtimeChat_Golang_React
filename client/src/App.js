import React, { useEffect, useState } from "react";

import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header/Header";
import { connect, sendMsg } from "./api";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory([...chatHistory, msg]);
    });
  }, [chatHistory]);

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
};

export default App;
