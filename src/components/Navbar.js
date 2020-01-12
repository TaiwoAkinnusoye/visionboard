import React, { useContext } from "react";
import { VisionBoardListContext } from "../contexts/VisionBoardListContext";

const Navbar = () => {
  const { vision } = useContext(VisionBoardListContext);
  return (
    <div className="navbar">
      <h1>
        <span role="img" aria-label="stars">
          ✨✨ 2020 Vision Board ✨✨
        </span>
      </h1>
      <p>
        My List of Goals, and Overall Vision{" "}
        <span role="img" aria-label="cool emoji">
          🔑
        </span>{" "}
        Currently, I have set {vision.length} goal
        {"s" ? vision.length > 1 : vision.length === 1}.
      </p>
    </div>
  );
};

export default Navbar;
