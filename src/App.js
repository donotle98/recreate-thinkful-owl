import React from "react";
import Participants from "./components/participantsBar/Participants";
import ScreenParticipants from "./components/mainScreen/screenParticipants";
import ChatBarParts from "./components/chatBar/chatBarParts";
import store from "./store/participantsStore";
import ChatStore from "./store/chatStore";

function App() {
  return (
    <div className="App">
      <section className="participant-section">
        <Participants store={store} />
      </section>
      <section className="main-screen">
        <ScreenParticipants store={store} />
      </section>
      <section className="chat-section">
        <ChatBarParts store={ChatStore} />
      </section>
    </div>
  );
}

export default App;
