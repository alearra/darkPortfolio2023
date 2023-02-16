import "./assets/styles/Global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing";
import { Load } from "./pages/Load";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Load />}></Route>
    <Route path="landing" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
