import React from "react";
import Participant from "./Participant";

export default function Participants(props) {
  return (
    <div>
      <section>
        {props.store.map((x) => (
          <Participant
            id={x.id}
            name={x.name}
            avatar={x.avatar}
            inSession={x.inSession}
            onStage={x.onStage}
          />
        ))}
      </section>
    </div>
  );
}
