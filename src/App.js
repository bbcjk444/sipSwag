// import logo from "./logo.svg";
import "./App.css";
import Join from "./join";
import Login from "./Login";
import FindID from "./findID";
import FindPW from "./findPW";
import UpdateUser from "./UpdateUser";
// import Homepage from "./pages/Homepage";
import Ch11 from "./pages/Game-3";
import Ch111 from "./pages/Game-2";
import Ch112 from "./pages/Game-1";
import Ch113 from "./pages/Game-0";
import Ch110 from "./pages/Story-10-02";
import Ch1101 from "./pages/Story-10-04";
import Ch1102 from "./pages/Story-10-03";
import Ch1103 from "./pages/Story-10-01";
import Ch19 from "./pages/Story-09";
import Ch18 from "./pages/Story-08";
import Ch1121 from "./pages/Story-11";
import Ch1111 from "./pages/Story-12";
import Ch17 from "./pages/Story-07";
import Ch16 from "./pages/Story-06";
import Ch15 from "./pages/Story-05";
import Ch14 from "./pages/Story-04";
import Ch13 from "./pages/Story-03";
import Ch12 from "./pages/Story-02";
import Ch114 from "./pages/Story-01";
import Component from "./pages/Gender-0";
import Component1 from "./pages/Gender-1";
import Component2 from "./pages/Component2";
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
        <Route path="/21" element={<Ch11 />} />

        <Route path="/20" element={<Ch111 />} />

        <Route path="/19" element={<Ch112 />} />

        <Route path="/18" element={<Ch113 />} />

        <Route path="/17" element={<Ch1111 />} />

        <Route path="/16" element={<Ch1121 />} />

        <Route path="/15" element={<Ch1101 />} />

        <Route path="/14" element={<Ch1102 />} />

        <Route path="/13" element={<Ch110 />} />

        <Route path="/12" element={<Ch1103 />} />

        <Route path="/11" element={<Ch19 />} />

        <Route path="/10" element={<Ch18 />} />

        <Route path="/9" element={<Ch17 />} />

        <Route path="/8" element={<Ch16 />} />

        <Route path="/7" element={<Ch15 />} />

        <Route path="/6" element={<Ch14 />} />

        <Route path="/5" element={<Ch13 />} />

        <Route path="/4" element={<Ch12 />} />

        <Route path="/3" element={<Ch114 />} />

        <Route path="/2" element={<Component />} />

        <Route path="/1" element={<Component1 />} />

        <Route path="/" element={<Component2 />} />
      </Routes>
    </Router>
  );
}

export default App;
