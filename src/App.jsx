import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
