import React, { useContext } from "react";
import { VisionBoardListContext } from "../contexts/VisionBoardListContext";
import VisionBoardDetails from "./VisionBoardDetails";

const VisionBoardList = () => {
  const { vision } = useContext(VisionBoardListContext);
  return vision.length ? (
    <div className="vision-list">
      <ul>
        {vision.map(v => {
          return <VisionBoardDetails vision={v} key={v.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">You have no goals left for this year!</div>
  );
};

export default VisionBoardList;
