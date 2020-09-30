import React from "react";

export default function ScreenParticipant(props) {
  let muted = true;
  let mutedBar = muted ? (
    <div>
      <hr className="red-bar"></hr>
      <img src="red-mute"></img>
    </div>
  ) : (
    <div>
      <hr className="gray-bar"></hr>
      <img src="gray-mute"></img>
    </div>
  );

  let peopleStage = props.onStage && (
    <div class="icon-section">
      <h3>{props.name}</h3>
      <img src={props.avatar} />
      {mutedBar}
    </div>
  );

  return <div>{peopleStage}</div>;
}
