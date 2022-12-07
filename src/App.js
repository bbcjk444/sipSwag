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
import Ch1_game_clear from "./pages/ch1/Ch1_Game_clear";
import Ch1_Clear from "./pages/ch1/Story_ch1_clear";
import Game1 from "./pages/ch1/game1/OneToFifty";
import Result from "./result";
import Ch2_Start from "./ch2/ch2/Story_ch2_start";
import Ch2_Story1 from "./ch2/ch2/Story_ch2_1";
import Ch2_Story2 from "./ch2/ch2/Story_ch2_2";
import Ch2_Story3 from "./ch2/ch2/Story_ch2_3";
import Ch2_Story4 from "./ch2/ch2/Story_ch2_4";
import Ch2_Story5 from "./ch2/ch2/Story_ch2_5";
import Ch2_Story6 from "./ch2/ch2/Story_ch2_6";
import Ch2_Story7 from "./ch2/ch2/Story_ch2_7";
import Ch2_Story8 from "./ch2/ch2/Story_ch2_8";
import Ch2_Story9 from "./ch2/ch2/Story_ch2_9";
import Ch2_Story10 from "./ch2/ch2/Story_ch2_10";
import Ch2_Story11 from "./ch2/ch2/Story_ch2_11";
import Ch2_Story12 from "./ch2/ch2/Story_ch2_12";
import Ch2_Story13 from "./ch2/ch2/Story_ch2_13";
import Ch2_Story14 from "./ch2/ch2/Story_ch2_14";
import Ch2_Story15 from "./ch2/ch2/Story_ch2_15";
import Ch2_Story16 from "./ch2/ch2/Story_ch2_16";
import Ch2_Story17 from "./ch2/ch2/Story_ch2_17";
import Ch2_Story18 from "./ch2/ch2/Story_ch2_18";
import Ch2_Story19 from "./ch2/ch2/Story_ch2_19";
import Ch2_Story20 from "./ch2/ch2/Story_ch2_20";
import Ch2_Story21 from "./ch2/ch2/Story_ch2_21";
import Ch2_Story22 from "./ch2/ch2/Story_ch2_22";
import Ch2_Story23 from "./ch2/ch2/Story_ch2_23";
import Ch2_Story24 from "./ch2/ch2/Story_ch2_24";
import Ch2_Story25 from "./ch2/ch2/Story_ch2_25";
import Ch2_Story26 from "./ch2/ch2/Story_ch2_26";
import Ch2_game_result1 from "./ch2/ch2/Game_ch2_result_01";
import Ch2_game_result2 from "./ch2/ch2/Game_ch2_result_02";
import Ch2_game_result3 from "./ch2/ch2/Game_ch2_result_03";
import Ch2_game_clear from "./ch2/ch2/Ch2_Game_clear";
import Ch2_Clear from "./ch2/ch2/Story_ch2_clear";
import SecondGameCard from "./ch2/ch2/secondGame/Cards";
import SecondGameCar from "./ch2/ch2/DragCo";
import Doe from "./scenariocall";
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

      <Route path="/ch2start" element={<Ch2_Start />} />

      <Route path="/ch2story1" element={<Ch2_Story1 />} />

      <Route path="/ch2story2" element={<Ch2_Story2 />} />

      <Route path="/ch2story3" element={<Ch2_Story3 />} />

      <Route path="/ch2story4" element={<Ch2_Story4 />} />

      <Route path="/ch2story5" element={<Ch2_Story5 />} />

      <Route path="/ch2story6" element={<Ch2_Story6 />} />

      <Route path="/ch2story7" element={<Ch2_Story7 />} />

      <Route path="/ch2story8" element={<Ch2_Story8 />} />

      <Route path="/ch2story9" element={<Ch2_Story9 />} />

      <Route path="/ch2story10" element={<Ch2_Story10 />} />

      <Route path="/ch2story11" element={<Ch2_Story11 />} />

      <Route path="/ch2story12" element={<Ch2_Story12 />} />

      <Route path="/ch2story13" element={<Ch2_Story13 />} />

      <Route path="/ch2story14" element={<Ch2_Story14 />} />

      <Route path="/ch2story15" element={<Ch2_Story15 />} />

      <Route path="/ch2story16" element={<Ch2_Story16 />} />

      <Route path="/ch2story17" element={<Ch2_Story17 />} />

      <Route path="/ch2story18" element={<Ch2_Story18 />} />

      <Route path="/ch2story19" element={<Ch2_Story19 />} />

      <Route path="/ch2story20" element={<Ch2_Story20 />} />

      <Route path="/ch2story21" element={<Ch2_Story21 />} />

      <Route path="/ch2story22" element={<Ch2_Story22 />} />

      <Route path="/ch2story23" element={<Ch2_Story23 />} />

      <Route path="/ch2story24" element={<Ch2_Story24 />} />

      <Route path="/ch2story25" element={<Ch2_Story25 />} />

      <Route path="/ch2story26" element={<Ch2_Story26 />} />

      <Route path="/ch2result1" element={<Ch2_game_result1 />} />

      <Route path="/ch2result2" element={<Ch2_game_result2 />} />

      <Route path="/ch2result3" element={<Ch2_game_result3 />} />

      <Route path="/ch2gameclear" element={<Ch2_game_clear />} />

      <Route path="/ch2clear" element={<Ch2_Clear />} />

      <Route path="/ch2CardGame" element={<SecondGameCard />} />

      <Route path="/ch2CarGame" element={<SecondGameCar />} />

      <Route path="/sceup" element={<Doe />} />
    </Routes>
  );
}
export default App;
