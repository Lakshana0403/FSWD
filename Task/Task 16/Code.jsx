Task 16: Simulate a basic authentication system with error alerts
  AuthSystem.jsx
import { useState } from "react";

function AuthSystem() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      alert("⚠️ Please enter username and password");
    } else if (username === "admin" && password === "1234") {
      alert("✅ Login successful");
    } else {
      alert("❌ Invalid username or password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Authentication</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AuthSystem;

App.jsx
import AuthSystem from "./AuthSystem";

function App() {
  return (
    <div>
      <AuthSystem />
    </div>
  );
}

export default App;
