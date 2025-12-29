Task 21: Simple student management dashboard with navigation and data display

StudentDashboard.jsx
import { useState } from "react";

function StudentDashboard() {
  const [students] = useState([
    { name: "Alice", roll: 101 },
    { name: "Bob", roll: 102 },
    { name: "Charlie", roll: 103 },
  ]);

  const [view, setView] = useState("home");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student Management Dashboard</h2>

      <nav>
        <button onClick={() => setView("home")}>Home</button>{" "}
        <button onClick={() => setView("students")}>Students</button>
      </nav>

      <hr />

      {view === "home" && <p>Welcome to the Student Dashboard</p>}

      {view === "students" && (
        <div>
          <h3>Student List</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {students.map((student, index) => (
              <li key={index}>
                {student.name} - Roll No: {student.roll}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;

App.jsx
import StudentDashboard from "./StudentDashboard";

function App() {
  return (
    <div>
      <StudentDashboard />
    </div>
  );
}

export default App;
