Task 13: Implement a simple user profile editing system with form validation

Task13ProfileEdit.jsx:
import React, { useState } from "react";

function Task13ProfileEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    if (name === "" || email === "") {
      alert("⚠️ All fields are required!");
    } else {
      alert("✅ Profile updated successfully!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>User Profile Edit</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
}

export default Task13ProfileEdit;

App.jsx:
import React from "react";
import Task13ProfileEdit from "./Task13ProfileEdit";

function App() {
  return (
    <div>
      <Task13ProfileEdit />
    </div>
  );
}

export default App;

