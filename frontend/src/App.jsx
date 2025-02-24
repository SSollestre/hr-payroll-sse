import { Routes, Route, Navigate } from "react-router-dom";
import "./CSS/App.css";

// Import components
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Navigate to="/homepage/guest" />} />
        <Route path="/homepage" element={<Navigate to="/homepage/guest" />} />
        <Route path="/homepage/:role" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
