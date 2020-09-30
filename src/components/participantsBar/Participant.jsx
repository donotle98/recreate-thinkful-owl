import React from "react";

export default function Participant(props) {
  const id = `Participant: ${props.id}`;

  const inSessionIndicator = props.inSession ? (
    <span className="dot1" />
  ) : (
    <span className="dot2" />
  );
  const inSessionTxt = props.inSession ? (
    <h5>in Session</h5>
  ) : (
    <h5>left Session</h5>
  );
  const onStage = props.onStage ? <h5>on Stage</h5> : inSessionTxt;

  return (
    <div id={id}>
      <h3>{props.name}</h3>
      <img src={props.avatar} />
      {inSessionIndicator}
      {onStage}
      <a href="#">Boot</a>
    </div>
  );
}
