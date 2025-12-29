Task 19: Construct a responsive blog layout with real-time comment update
  
BlogLayout.jsx
import { useState } from "react";

function BlogLayout() {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const addComment = () => {
    if (comment.trim() === "") {
      alert("⚠️ Comment cannot be empty");
    } else {
      setCommentsList([...commentsList, comment]);
      setComment("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Blog Post</h2>
      <p>This is a sample blog content...</p>

      <textarea
        placeholder="Add your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={3}
        cols={40}
      />
      <br /><br />
      <button onClick={addComment}>Add Comment</button>

      <h3>Comments:</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {commentsList.map((cmt, index) => (
          <li key={index} style={{ borderBottom: "1px solid #ccc", padding: "5px" }}>
            {cmt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogLayout;

App.jsx
import BlogLayout from "./BlogLayout";

function App() {
  return (
    <div>
      <BlogLayout />
    </div>
  );
}

export default App;
