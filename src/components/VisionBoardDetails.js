import React, { useContext } from "react";
import { VisionBoardListContext } from "../contexts/VisionBoardListContext";

const VisionBoardDetails = ({ vision }) => {
  const { dispatch } = useContext(VisionBoardListContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_VISION", id: vision.id })}>
      <div className="title">{vision.title}</div>
      <div className="milestone">{vision.milestone}</div>
    </li>
  );
};

export default VisionBoardDetails;
