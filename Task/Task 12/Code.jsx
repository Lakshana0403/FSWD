Task12EventRegistration.jsx

import React from "react";

function Task12EventRegistration() {
  const handleRegister = () => {
    const confirmRegister = window.confirm(
      "Do you want to register for the event?"
    );

    if (confirmRegister) {
      alert("🎉 You have successfully registered for the event!");
    } else {
      alert("❌ Registration cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Event Registration</h2>
      <p>Click below to register for the event</p>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Task12EventRegistration;

App.jsx:
import React from "react";
import Task12EventRegistration from "./Task12EventRegistration";

function App() {
  return (
    <div>
      <Task12EventRegistration />
    </div>
  );
}

export default App;
