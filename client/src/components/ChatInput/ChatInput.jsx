import React from "react";
import "./ChatInput.scss";

const ChatInput = (props) => {
  return (
    <div className="ChatInput">
      <input onKeyDown={e => props.send(e)} />
    </div>
  );
};

export default ChatInput;
