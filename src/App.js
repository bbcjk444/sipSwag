// import logo from "./logo.svg";
import "./App.css";
import Join from "./join";
import Login from "./Login";
import Mypage from "./Mypage";
import FindID from "./findID";
import FindPW from "./findPW";
import UpdateUser from "./UpdateUser";
import Scecheck from './scenariocall';
import Main from './Ch1/CH1';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my" element={<Mypage />} />
        <Route path="/findID" element={<FindID />} />
        <Route path="/findPW" element={<FindPW />} />
        <Route path="/scecheck" element={<Scecheck />} />
      </Routes>
    </Router>
  );
}

export default App;
