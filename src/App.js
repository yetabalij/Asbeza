import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Profile from "./components/Profile";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
