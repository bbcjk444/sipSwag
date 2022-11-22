// import logo from "./logo.svg";
import "./App.css";
import Join from "./join";
import Login from "./Login";
import FindID from "./findID";
import FindPW from "./findPW";
import UpdateUser from "./UpdateUser";
// import Homepage from "./pages/Homepage";
import CH0 from "./CH1/CH0";
import CH1 from "./CH1/CH1";
import CH2 from "./CH1/CH2";
import CH3 from "./CH1/CH3";
import CH4 from "./CH1/CH4";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<CH0 />} />
        <Route path="/join" element={<Join />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<CH4 />} />
        <Route path="/findID" element={<FindID />} />
        <Route path="/findPW" element={<FindPW />} />
      </Routes>
    </Router>
  );
}

export default App;
