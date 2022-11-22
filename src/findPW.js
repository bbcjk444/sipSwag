import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FP = () => {
    const idRef = useRef();
    const nameRef = useRef();
    const tellRef = useRef();

    const navigate = useNavigate();

    const [pw, setpw] = useState({findpw: ''});

    const gologin = () => {
        navigate('/login');
    }

    const FindPW = () => {
        axios
        .post("http://localhost:8008/findPW", {
            id: idRef.current.value,
            name: nameRef.current.value,
            tell: tellRef.current.value,
        })
        .then((res) => {
            console.log('FindPW =>', res.data[0]);
            setpw({findpw: res.data[0].user_pass});
        })
    };

    return (
        <div className='FindPw' align="center" border-radius="22px">
            <h1>PW찾기</h1>
            <form>
                <div className='text-area'>
                    <input 
                        type="text"
                        id="id"
                        name="id"
                        placeholder="아이디 입력"
                        className="text_input"
                        ref={idRef}
                    />
                </div>
                <div className='text-area'>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="이름 입력"
                        className="text_input"
                        ref={nameRef}
                    />
                </div>
                <div className='text-area'>
                    <input 
                        type="text"
                        id="tell"
                        name="tell"
                        placeholder="전화번호 입력"
                        className="text_input"
                        ref={tellRef}
                    />
                </div>
                <br/>
                <input type="button" value="PW찾기" className="btn" onClick={FindPW} />
                <br/>
                <input type="button" value="로그인 ㄱㄱ" className="btn" onClick={gologin} />
            </form>
            <br/>
            <div>
                <h3>당신의 비밀번호는: </h3>
                <h3>{pw.findpw} 입니다.</h3>
            </div>
        </div>
    );
};

export default FP;