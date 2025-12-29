Task 15: Design a login interface that redirects users based on role selection

RoleLogin.jsx
import { useState } from "react";

function RoleLogin() {
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role === "") {
      alert("Please select a role");
    } else if (role === "Admin") {
      alert("Redirecting to Admin Dashboard");
    } else if (role === "User") {
      alert("Redirecting to User Dashboard");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option>Admin</option>
        <option>User</option>
      </select>

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default RoleLogin;

App.jsx
import RoleLogin from "./RoleLogin";

function App() {
  return (
    <div>
      <RoleLogin />
    </div>
  );
}

export default App;
