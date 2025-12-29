Task 17: Implement a student feedback system with rating and comments section

StudentFeedback.jsx
import { useState } from "react";

function StudentFeedback() {
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    if (rating === "" || comments.trim() === "") {
      alert("⚠️ Please provide rating and comments");
    } else {
      alert(`✅ Feedback submitted!\nRating: ${rating}\nComments: ${comments}`);
      setRating("");
      setComments("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student Feedback</h2>

      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">Select Rating</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Poor</option>
      </select>
      <br /><br />

      <textarea
        placeholder="Enter your comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        rows={4}
        cols={30}
      />
      <br /><br />

      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
}

export default StudentFeedback;

App.jsx
import StudentFeedback from "./StudentFeedback";

function App() {
  return (
    <div>
      <StudentFeedback />
    </div>
  );
}

export default App
