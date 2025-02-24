import { Routes, Route } from "react-router-dom";
import "./CSS/App.css";

// Import components
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
