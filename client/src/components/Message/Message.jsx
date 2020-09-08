import React from "react";
import "./Message.scss";

const Message = (props) => {
  return (
    <div className="Message">
      {props.messages ? JSON.parse(props.messages).body : ""}
    </div>
  );
};

export default Message;
