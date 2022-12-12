import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Scenarioupdate = ({ modal5, openModal5 }) => {
  const scenario_numRef = useRef();
  const chapter_numRef = useRef();
  const scene_numRef = useRef();
  const speak_numRef = useRef();
  const speak_storyRef = useRef();

  sessionStorage.setItem("scecheck", "");

  const navigate = useNavigate();

  const scecall = () => {
    axios
      .post("http://localhost:8008/scecall", {
        scenario_num: scenario_numRef.current.value,
        chapter_num: chapter_numRef.current.value,
        scene_num: scene_numRef.current.value,
        speak_num: speak_numRef.current.value,
      })
      .then((res) => {
        console.log("res 값 => " + JSON.stringify(res.data[0].speak_story));
        document.getElementById("scecheck").value = JSON.stringify(
          res.data[0].speak_story
        ).substring(1, JSON.stringify(res.data[0].speak_story).length - 1);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const sceupdate = () => {
    axios
      .post("http://localhost:8008/sceupdate", {
        scenario_num: scenario_numRef.current.value,
        chapter_num: chapter_numRef.current.value,
        scene_num: scene_numRef.current.value,
        speak_num: speak_numRef.current.value,
        speak_story: speak_storyRef.current.value,
      })
      .then((res) => {
        var scenario_num = document.getElementById("scenario_num");
        var chapter_num = document.getElementById("chapter_num");
        var scene_num = document.getElementById("scene_num");
        var speak_num = document.getElementById("speak_num");
        var speak_story = document.getElementById("scecheck");
        scenario_num.value = "";
        chapter_num.value = "";
        scene_num.value = "";
        speak_num.value = "";
        speak_story.value = "";
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="wrap" align="center">
      <div className="login">
        <form>
          <div className="login_id">
            <input
              type="text"
              id="scenario_num"
              name="scenario_num"
              placeholder="시나리오번호를입력해주세요"
              className="input"
              ref={scenario_numRef}
              defaultValue=""
            />
          </div>
          <div className="login_id">
            <input
              type="text"
              id="chapter_num"
              name="chapter_num"
              placeholder="챕터 번호를 입력해주세요"
              className="input"
              ref={chapter_numRef}
              defaultValue=""
            />
          </div>
          <div className="login_id">
            <input
              type="text"
              id="scene_num"
              name="scene_num"
              placeholder="화면 번호를 입력해주세요"
              className="input"
              ref={scene_numRef}
              defaultValue=""
            />
          </div>
          <div className="login_id">
            <input
              type="text"
              id="speak_num"
              name="speak_num"
              placeholder="대사 번호를 입력해주세요"
              className="input"
              ref={speak_numRef}
              defaultValue=""
            />
          </div>
          <div className="button">
            <input
              className="btn"
              type="button"
              value="불러오기"
              onClick={scecall}
            />
          </div>
        </form>
        <div className="login_id">
          <input
            test-align="center"
            type="text"
            id="scecheck"
            name="scecheck"
            className="text_input"
            ref={speak_storyRef}
            size="70"
          />
        </div>
        <div className="button">
          <input
            className="btn"
            type="button"
            value="대본 수정"
            onClick={sceupdate}
          />
          <input
            className="clear"
            type="button"
            value="닫기"
            onClick={() => {
              openModal5(modal5);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Scenarioupdate;
