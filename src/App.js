import logo from './logo.svg';
import './App.css';
import Navbar12 from "./components/Navbar12";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Router>
        <Navbar12 />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
