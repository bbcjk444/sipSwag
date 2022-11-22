import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Scenarioupdate = () => {

    const scenario_numRef = useRef();
    const chapter_numRef = useRef();
    const scene_numRef = useRef();
    const speak_numRef = useRef();
    const speak_storyRef = useRef();

    sessionStorage.setItem('scecheck', '');

    const navigate = useNavigate();

    const scecall = () => {
        axios
         .post('http://localhost:8008/scecall',{
            scenario_num: scenario_numRef.current.value,
            chapter_num: chapter_numRef.current.value,
            scene_num: scene_numRef.current.value,
            speak_num: speak_numRef.current.value
         })
         .then((res) => {
            console.log('res 값 => ' + JSON.stringify(res.data[0].speak_story));
            window.sessionStorage.setItem('scecheck', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
            console.log('scecheck 세션값 => ' + sessionStorage.getItem('scecheck'))
            document.getElementById('scecheck').defaultValue = sessionStorage.getItem('scecheck');
        })
         .catch((e) => {
            console.error(e);
          }); 
    }

    const sceupdate = () => {
        axios
         .post('http://localhost:8008/sceupdate',{
            scenario_num: scenario_numRef.current.value,
            chapter_num: chapter_numRef.current.value,
            scene_num: scene_numRef.current.value,
            speak_num: speak_numRef.current.value,
            speak_story: speak_storyRef.current.value
         })
         .then((res) => {
            navigate('/');
        })
         .catch((e) => {
            console.error(e);
          }); 
    }


    return(
        <div className="scenarioupdate" align="center">
            <form>
                <div className="text-area">
                    <input
                        type="text"
                        id="scenario_num"
                        name="scenario_num"
                        placeholder="시나리오 번호를 입력해주세요"
                        className="text_input"
                        ref={scenario_numRef}
                        defaultValue=""
                    />
                </div>
                <div className="text-area">
                    <input
                        type="text"
                        id="chapter_num"
                        name="chapter_num"
                        placeholder="챕터 번호를 입력해주세요"
                        className="text_input"
                        ref={chapter_numRef}
                        defaultValue=""
                    />
                </div>
                <div className="text-area">
                    <input
                        type="text"
                        id="scene_num"
                        name="scene_num"
                        placeholder="화면 번호를 입력해주세요"
                        className="text_input"
                        ref={scene_numRef}
                        defaultValue=""
                    />
                </div>
                <div className="text-area">
                    <input
                        type="text"
                        id="speak_num"
                        name="speak_num"
                        placeholder="대사 번호를 입력해주세요"
                        className="text_input"
                        ref={speak_numRef}
                        defaultValue=""
                    />
                </div>
                <input className="btn" type="button" value="불러오기" onClick={scecall} />
            </form>

            <br/><br/><br/>
            <div className="text-area">
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
             <input className="btn" type="button" value="대사 수정" onClick={sceupdate} />

        </div>
    )
}

export default Scenarioupdate;