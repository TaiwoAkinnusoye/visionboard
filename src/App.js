import React from "react";
import VisionBoardListContextProvider from "./contexts/VisionBoardListContext";
import Navbar from "./components/Navbar";
import VisionBoardList from "./components/VisionBoardList";
import VisionBoardForm from "./components/VisionBoardForm";

function App() {
  return (
    <div className="App">
      <VisionBoardListContextProvider>
        <Navbar />
        <VisionBoardList />
        <VisionBoardForm />
      </VisionBoardListContextProvider>
    </div>
  );
}

export default App;
