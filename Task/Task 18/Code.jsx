Task 18: Simulate a notification system for a dashboard application

NotificationSystem.jsx
import React from "react";

function NotificationSystem() {
  const showNotification = () => {
    alert("🔔 You have a new notification!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dashboard Notifications</h2>
      <button onClick={showNotification}>Show Notification</button>
    </div>
  );
}

export default NotificationSystem;

App.jsx
import NotificationSystem from "./NotificationSystem";

function App() {
  return (
    <div>
      <NotificationSystem />
    </div>
  );
}

export default App;
