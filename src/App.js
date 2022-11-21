import logo from './logo.svg';
import './App.css';
import Join from "./join";
import Login from "./Login";
import Mypage from "./Mypage";
import FindID from "./findID";
import FindPW from "./findPW";
import UpdateUser from './UpdateUser';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Homepage />} />
        <Route path="/join"  element={<Join />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my" element={<Mypage />} />
        <Route path="/findID" element={<FindID />} />
        <Route path="/findPW" element={<FindPW />} />
      </Routes>
    </Router>
  );
}

export default App;
