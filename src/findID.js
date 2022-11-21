import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FI = () => {
    const nameRef = useRef();
    const tellRef = useRef();

    const navigate = useNavigate();

    const [id, setid] = useState({findid: ''});

    const gologin = () => {
        navigate('/login');
    }

    const FindID = () => {
        axios
        .post("http://localhost:8008/findID", {
            name: nameRef.current.value,
            tell: tellRef.current.value,
        })
        .then((res) => {
            console.log('FindID =>', res.data[0]);
            setid({findid: res.data[0].user_id});
        })
    };

    return (
        <div className='FindID' align="center" border-radius="22px">
            <h1>ID찾기</h1>
            <form>
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
                <input type="button" value="ID찾기" className="btn" onClick={FindID} />
                <br/>
                <input type="button" value="로그인 ㄱㄱ" className="btn" onClick={gologin} />
            </form>
            <br/>
            <div>
                <h3>당신의 아이디는: </h3>
                <h3>{id.findid} 입니다.</h3>
            </div>
        </div>
    );
};

export default FI;