import React, { createContext, useReducer, useEffect } from "react";
import { visionBoardRecucer } from "../reducers/visionBoardReducer";

export const VisionBoardListContext = createContext();

const VisionBoardListContextProvider = props => {
  const [vision, dispatch] = useReducer(visionBoardRecucer, [], () => {
    const localData = localStorage.getItem("vision");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("vision", JSON.stringify(vision));
  }, [vision]);

  return (
    <VisionBoardListContext.Provider value={{ vision, dispatch }}>
      {props.children}
    </VisionBoardListContext.Provider>
  );
};

export default VisionBoardListContextProvider;
