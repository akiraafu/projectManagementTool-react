import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

const ProjectComments = () => {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createAt: timestamp.fromDate(new Date()),
      //can user better id generator later
      id: Math.random(),
    };

    console.log(commentToAdd);
  };
  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>Add new comment:</label>
        <textarea
          required
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button className="btn">Submit Comment</button>
      </form>
    </div>
  );
};

export default ProjectComments;
