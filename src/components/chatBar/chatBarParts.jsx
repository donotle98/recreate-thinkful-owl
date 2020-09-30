import React from "react";
import ChatBarPart from "./chatBarPart";

export default function ChatBarParts(props) {
  return (
    <div>
      {props.store.map((x) => (
        <ChatBarPart
          id={x.participantId}
          type={x.type}
          message={x.message}
          time={x.time}
          timeStamp={x.timeStamp}
        />
      ))}
    </div>
  );
}
