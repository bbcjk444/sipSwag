import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Join from "./join";
import Login from "./Login";
import FindID from "./findID";
import FindPW from "./findPW";
import UpdateUser from "./UpdateUser";
import Main_01 from "./pages/ch1/Main_01";
import Main_02 from "./pages/ch1/Main_02";
import Ch1_Start from "./pages/ch1/Story_ch1_start";
import Ch1_Story1 from "./pages/ch1/Story_ch1_01";
import Ch1_Story2 from "./pages/ch1/Story_ch1_02";
import Ch1_Story3 from "./pages/ch1/Story_ch1_03";
import Ch1_Story4 from "./pages/ch1/Story_ch1_04";
import Ch1_Story5 from "./pages/ch1/Story_ch1_05";
import Ch1_Story6 from "./pages/ch1/Story_ch1_06";
import Ch1_Story7 from "./pages/ch1/Story_ch1_07";
import Ch1_Story8 from "./pages/ch1/Story_ch1_08";
import Ch1_Story9 from "./pages/ch1/Story_ch1_09";
import Ch1_Story10 from "./pages/ch1/Story_ch1_10";
import Ch1_Story11 from "./pages/ch1/Story_ch1_11";
import Ch1_Story12 from "./pages/ch1/Story_ch1_12";
import Ch1_Story13 from "./pages/ch1/Story_ch1_13";
import Ch1_Story14 from "./pages/ch1/Story_ch1_14";
import Ch1_Story14_1 from "./pages/ch1/Story_ch1_14_1";
import Ch1_Story15 from "./pages/ch1/Story_ch1_15";
import Ch1_Game1 from "./pages/ch1/Game_ch1_play_01";
import Ch1_Game2 from "./pages/ch1/Game_ch1_play_02";
import Ch1_Game3 from "./pages/ch1/Game_ch1_play_03";
import Ch1_Game4 from "./pages/ch1/Game_ch1_play_04";
import Ch1_Game5 from "./pages/ch1/Game_ch1_play_05";
import Ch1_game_result1 from "./pages/ch1/Game_ch1_result_01";
import Ch1_game_result2 from "./pages/ch1/Game_ch1_result_02";
import Ch1_game_result3 from "./pages/ch1/Game_ch1_result_03";
import Ch1_game_clear from "./pages/ch1/Game_clear";
import Ch1_Clear from "./pages/ch1/Story_ch1_clear";
import Game1 from "./pages/ch1/game1/OneToFifty";
import Result from "./result";
import { useEffect } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main_01 />} />

      <Route path="/main02" element={<Main_02 />} />

      <Route path="/ch1start" element={<Ch1_Start />} />

      <Route path="/ch1story1" element={<Ch1_Story1 />} />

      <Route path="/ch1story2" element={<Ch1_Story2 />} />

      <Route path="/ch1story3" element={<Ch1_Story3 />} />

      <Route path="/ch1story4" element={<Ch1_Story4 />} />

      <Route path="/ch1story5" element={<Ch1_Story5 />} />

      <Route path="/ch1story6" element={<Ch1_Story6 />} />

      <Route path="/ch1story7" element={<Ch1_Story7 />} />

      <Route path="/ch1story8" element={<Ch1_Story8 />} />

      <Route path="/ch1story9" element={<Ch1_Story9 />} />

      <Route path="/ch1story10" element={<Ch1_Story10 />} />

      <Route path="/ch1story11" element={<Ch1_Story11 />} />

      <Route path="/ch1story12" element={<Ch1_Story12 />} />

      <Route path="/ch1story13" element={<Ch1_Story13 />} />

      <Route path="/ch1story14" element={<Ch1_Story14 />} />

      <Route path="/ch1story141" element={<Ch1_Story14_1 />} />

      <Route path="/ch1story15" element={<Ch1_Story15 />} />

      <Route path="/ch1game1" element={<Ch1_Game1 />} />

      <Route path="/game1" element={<Game1 />} />

      <Route path="/ch1game2" element={<Ch1_Game2 />} />

      <Route path="/ch1game3" element={<Ch1_Game3 />} />

      <Route path="/ch1game4" element={<Ch1_Game4 />} />

      <Route path="/ch1game5" element={<Ch1_Game5 />} />

      <Route path="/ch1result1" element={<Ch1_game_result1 />} />

      <Route path="/ch1result2" element={<Ch1_game_result2 />} />

      <Route path="/ch1result3" element={<Ch1_game_result3 />} />

      <Route path="/ch1gameclear" element={<Ch1_game_clear />} />

      <Route path="/ch1clear" element={<Ch1_Clear />} />

      <Route path="/join" element={<Join />} />

      <Route path="/UpdateUser" element={<UpdateUser />} />

      <Route path="/login" element={<Login />} />

      <Route path="/findID" element={<FindID />} />

      <Route path="/findPW" element={<FindPW />} />

      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
export default App;
