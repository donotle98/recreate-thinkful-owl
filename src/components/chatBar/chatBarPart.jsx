import React from "react";
import store from "../../store/participantsStore";

export default function ChatBarPart(props) {
  let s = new Date(props.timestamp).toLocaleTimeString([], {
    timeStyle: "short",
  });
  let pplMessages = store.map(
    (x) =>
      props.message &&
      x.id === props.id && (
        <div>
          <h3>{x.name}</h3>
          <img src={x.avatar}></img>
          <span>{s.replace("AM", "").replace("PM", "")}</span>
          <h2>{props.message}</h2>
        </div>
      )
  );
  let chatRoom = store.map(
    (x) =>
      x.id === props.id && (
        <div>
          <h3>{x.name}</h3>
          <h4>{props.type}</h4>
        </div>
      )
  );
  return (
    <div>
      <div>
        {chatRoom}
        {pplMessages}
      </div>
    </div>
  );
}
