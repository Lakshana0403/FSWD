Task 14: Dynamic registration form for an online workshop with live preview

WorkshopRegistration.jsx
import { useState } from "react";

function WorkshopRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Online Workshop Registration</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <select value={topic} onChange={(e) => setTopic(e.target.value)}>
        <option value="">Select Topic</option>
        <option>React Basics</option>
        <option>JavaScript</option>
        <option>Web Development</option>
      </select>

      <hr />

      <h3>Live Preview</h3>
      <p><b>Name:</b> {name}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Topic:</b> {topic}</p>
    </div>
  );
}

export default WorkshopRegistration;

App.jsx
import WorkshopRegistration from "./WorkshopRegistration";

function App() {
  return (
    <div>
      <WorkshopRegistration />
    </div>
  );
}

export default App;
