import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/login" element={<><Login/></>}></Route>

          <Route path="/checkout" element={<><Header /><Checkout /></>} />

          <Route path="/" element={<><Header /><Home /></>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
