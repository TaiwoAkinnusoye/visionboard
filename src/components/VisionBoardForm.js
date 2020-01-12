import React, { useContext, useState } from "react";
import { VisionBoardListContext } from "../contexts/VisionBoardListContext";

const VisionBoardForm = () => {
  const { dispatch } = useContext(VisionBoardListContext);
  const [title, setTitle] = useState("");
  const [milestone, setMilestone] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_VISION",
      vision: {
        title,
        milestone
      }
    });
    setTitle("");
    setMilestone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Goal Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Goal Milestone"
        value={milestone}
        onChange={e => setMilestone(e.target.value)}
        required
      />
      <input type="submit" value="Add a Goal" />
    </form>
  );
};

export default VisionBoardForm;
