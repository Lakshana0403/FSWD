Task 23: Multi-page student dashboard with navigation using React Router

StudentRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h3>Welcome to the Student Portal</h3>;
}

function Profile() {
  return <h3>Student Profile Page</h3>;
}

function Marks() {
  return <h3>Student Marks Page</h3>;
}

function StudentRouter() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Student Dashboard</h2>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/profile" style={{ margin: "0 10px" }}>Profile</Link>
          <Link to="/marks" style={{ margin: "0 10px" }}>Marks</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marks" element={<Marks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default StudentRouter;

App.jsx
import StudentRouter from "./StudentRouter";

function App() {
  return (
    <div>
      <StudentRouter />
    </div>
  );
}

export default App;
