import React from "react";
import ScreenParticipant from "./screenParticipant";

export default function ScreenParticipants(props) {
  return (
    <div>
      <section>
        {props.store.map((x) => (
          <ScreenParticipant
            name={x.name}
            avatar={x.avatar}
            onStage={x.onStage}
          />
        ))}
      </section>
    </div>
  );
}
