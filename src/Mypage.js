import React, { useEffect, useState } from 'react';
import { Badge, Tab, Col, Nav, Row, Pagination } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  let [menu, setMenu] = useState(1);
  let navigate = useNavigate();

  const [user, setUser] = useState({
    user_name: '',
    user_nickname: '',
    user_email: '',
    profile_image: ''
  });
  const getUser = (e) => {
    axios
      .post('http://localhost:8008/user_login', { user_id: sessionStorage.getItem('id') })
      .then((res) => {
        const { data } = res;
        // console.log('user_login =>', data);
        setUser({
          ...user,
          user_name: data[0].user_name,
          user_nickname: data[0].user_nickname,
          user_email: data[0].user_email,
          profile_image: data[0].user_profile,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const image = 'http://localhost:8008/userimgFolder/' + user.profile_image;

  //찜한 축제, 맛집, 내가 쓴 게시글 리스트
  const [likeFes, setLikeFes] = useState([]);
  const [likeRes, setLikeRes] = useState([]);
  const [myboard, setMyboard] = useState([]);

  //찜한 축제 리스트 get
  const getLikeFesList = (e) => {
    axios
      .post('http://localhost:8008/searchLikeFes', { user_id: sessionStorage.getItem('id') })
      .then((res) => {
        const { data } = res;
        // console.log('searchLikeFes =>', data);
        if (res.data.length > 0) {
          for (var i = 0; i < res.data.length; i++) {
            likeFes.splice(i, 0, data[i]);
          }
        }
        setLikeFes(likeFes);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  //찜한 맛집 리스트 get
  const getLikeResList = (e) => {
    axios
      .post('http://localhost:8008/searchLikeRes', { user_id: sessionStorage.getItem('id') })
      .then((res) => {
        const { data } = res;
        // console.log('searchLikeRes =>', data);
        if (res.data.length > 0) {
          for (var i = 0; i < res.data.length; i++) {
            likeRes.splice(i, 0, data[i]);
          }
        }
        setLikeRes(likeRes);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  //내가 쓴 글 리스트 get
  const getMyboardList = (e) => {
    axios
      .post('http://localhost:8008/searchMyBoard', { user_id: sessionStorage.getItem('id') })
      .then((res) => {
        const { data } = res;
        // console.log('searchMyBoard =>', data, typeof data);
        if (res.data.length > 0) {
          for (var i = 0; i < res.data.length; i++) {
            myboard.splice(i, 0, data[i]);
          }
        }
        setMyboard(myboard);
        // console.log(myboard.length);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // window.location.replace('/mypage');
  useEffect(() => {
    getLikeFesList();
    getLikeResList();
    getMyboardList();
    getUser();
  }, []);

  return (
    <>
      <div className="profile">
        {image === 'http://localhost:8008/userimgFolder/null' ||
        image === undefined ||
        image === null ? (
          <i
            className="bi bi-person-circle"
            style={{ fontSize: '80px' }}
            onClick={() => {
              navigate('/updateuser');
            }}
          ></i>
        ) : (
          <img
            src={image}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            onClick={() => {
              navigate('/updateuser');
            }}
          />
        )}

        <Badge
          bg="secondary"
          style={{ marginLeft: '5px', verticalAlign: 'bottom' }}
          onClick={() => {
            navigate('/updateuser');
          }}
        >
          정보 수정  
        </Badge>
        <Badge
          bg="secondary"
          style={{ marginLeft: '5px', verticalAlign: 'bottom' }}
          onClick={() => {
            alert('세션 제거전: '+sessionStorage.getItem('id'));
            sessionStorage.removeItem('id');
            alert('세션 제거후: '+sessionStorage.getItem('id'));
            navigate('/login');
          }}
        >
          logOut  
        </Badge>
        <Badge
          bg="secondary"
          style={{ marginLeft: '5px', verticalAlign: 'bottom' }}
          onClick={() => {
            axios
      .post('http://localhost:8008/userdelete', {
        id: sessionStorage.getItem('id'),
      })
      .then((res) => {
        console.log('handleuserdelete =>', res);
        if (res.data.affectedRows === 1) {
          alert('탈퇴 성공');
          navigate('/');
        } else {
          alert('탈퇴 실패');
        }
      })
      .catch((e) => {
        console.error(e);
      });
          }}
        >
          회원탈퇴
        </Badge>
      </div>
      <div width="100%" align="center" style={{ padding: '10px' }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column" style={{ background: 'white' }}>
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    {menu === 1 ? (
                      <span
                        style={{ fontSize: '20px' }}
                        onClick={() => {
                          setMenu(1);
                        }}
                      >
                        <i className="bi bi-heart-fill"></i>&nbsp;찜
                      </span>
                    ) : (
                      <span
                        style={{ fontSize: '20px' }}
                        onClick={() => {
                          setMenu(1);
                        }}
                      >
                        <i className="bi bi-heart"></i>&nbsp;찜
                      </span>
                    )}
                  </Nav.Link>
                  <Nav.Link eventKey="second">
                    {menu === 3 ? (
                      <span
                        style={{ fontSize: '20px' }}
                        onClick={() => {
                          setMenu(3);
                        }}
                      >
                        {/* <i className="bi bi-cup-hot-fill"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-cup-hot-fill"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"
                          />
                          <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
                        </svg>
                        &nbsp;맛 집
                      </span>
                    ) : (
                      <span
                        style={{ fontSize: '20px' }}
                        onClick={() => {
                          setMenu(3);
                        }}
                      >
                        {/* <i className="bi bi-cup-hot"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-cup-hot"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"
                          />
                          <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
                        </svg>
                        &nbsp;맛 집
                      </span>
                    )}
                  </Nav.Link>
                  <Nav.Link eventKey="third">
                    {menu === 2 ? (
                      <span
                        style={{ fontSize: '20px' }}
                        onClick={() => {
                          setMenu(2);
                        }}
                      >
                        {/* <i className="bi bi-clipboard-minus-fill"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-clipboard-minus-fill"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
                          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1Z" />
                        </svg>
                        &nbsp;내 글
                      </span>
                    ) : (
                      <span
                        style={{ fontSize: '20px' }}
                        onClick={() => {
                          setMenu(2);
                        }}
                      >
                        {/* <i className="bi bi-clipboard-minus"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-clipboard-minus"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                          />
                          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                        </svg>
                        &nbsp;내 글
                      </span>
                    )}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {likeFes === [] ||
                likeFes === undefined ||
                likeFes === null ||
                likeFes.length === 0 ? (
                  <Tab.Pane eventKey="first">
                    <br />
                    찜한 축제가 없습니다.
                  </Tab.Pane>
                ) : (
                  <Tab.Pane eventKey="first">
                    <ul className="list-group list-group-flush">
                      {likeFes.map(function (f, i) {
                        return <LikeFes key={i} likefes={f} />;
                      })}
                    </ul>
                  </Tab.Pane>
                )}
                {likeRes === [] ||
                likeRes === undefined ||
                likeRes === null ||
                likeRes.length === 0 ? (
                  <Tab.Pane eventKey="second">
                    <br />
                    찜한 맛집이 없습니다.
                  </Tab.Pane>
                ) : (
                  <Tab.Pane eventKey="second">
                    <ul className="list-group list-group-flush">
                      {likeRes.map(function (r, i) {
                        return <LikeRes key={i} likeres={r} />;
                      })}
                    </ul>
                  </Tab.Pane>
                )}
                {myboard === [] ||
                myboard === undefined ||
                myboard === null ||
                myboard.length === 0 ? (
                  <Tab.Pane eventKey="third">
                    <br />
                    내가 작성한 게시글이 없습니다.
                  </Tab.Pane>
                ) : (
                  <Tab.Pane eventKey="third">
                    <ul className="list-group list-group-flush">
                      {myboard.map(function (b, i) {
                        return <MyBoard key={i} myboard={b} />;
                      })}
                    </ul>
                  </Tab.Pane>
                )}

                {/* <Tab.Pane eventKey="third">
                  <ul className="list-group list-group-flush">
                    {myboard === [] || myboard === undefined ? (
                      <li className="list-group-item inline">
                        <p>내가 작성한 게시글이 없습니다. </p>
                      </li>
                    ) : (
                      myboard.map(function (b, i) {
                        return <MyBoard key={i} myboard={b} />;
                      })
                    )}
                  </ul>
                </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

function LikeFes({ likefes }) {
  var navigate = useNavigate();
  const goFesDetail = () => {
    navigate('/festivaldetail', {
      state: { contentid: likefes.content_id, areacode: likefes.areacode }
    });
  };

  return (
    <li className="list-group-item inline">
      {likefes.thumbnail === '' || likefes.thumbnail === undefined ? (
        <div className="list_img" align="center" style={{ fontSize: 'xx-large' }}>
          <i className="bi bi-image" onClick={goFesDetail}></i>
        </div>
      ) : (
        <img src={likefes.thumbnail} className="list_img" onClick={goFesDetail} />
      )}

      <span className="block" onClick={goFesDetail}>
        <b style={{ marginLeft: '10px' }}>{likefes.title}</b>
      </span>
      <span className="block">
        <p style={{ fontSize: '12px', marginLeft: '60px' }}>
          {likefes.startdate} - {likefes.enddate}
        </p>{' '}
        <p style={{ fontSize: '10px', marginLeft: '60px' }}>{likefes.addr}</p>{' '}
      </span>
    </li>
  );
}

function LikeRes({ likeres }) {
  var navigate = useNavigate();
  const goResDetail = () => {
    navigate('/restaurantdetail', { state: { get_r_contentid: likeres.content_id } });
  };

  return (
    <li className="list-group-item inline">
      {likeres.thumbnail === '' || likeres.thumbnail === undefined ? (
        <div className="list_img" align="center" style={{ fontSize: 'xx-large' }}>
          <i className="bi bi-image" onClick={goResDetail}></i>
        </div>
      ) : (
        <img className="list_img" src={likeres.thumbnail} onClick={goResDetail} />
      )}

      <span className="block" onClick={goResDetail}>
        <b style={{ marginLeft: '10px' }}>{likeres.title}</b>
      </span>
      <span className="block">
        <p style={{ fontSize: '12px', marginLeft: '60px' }}>{likeres.addr}</p>{' '}
      </span>
    </li>
  );
}

function MyBoard({ myboard }) {
  return (
    <li className="list-group-item inline">
      <img className="list_img" src={myboard.board_image1} />
      <span className="block">
        <b style={{ marginLeft: '10px' }}>{myboard.board_title}</b>
      </span>
      <span className="block">
        <p style={{ fontSize: '12px', marginLeft: '60px' }}>{myboard.board_date}</p>{' '}
      </span>
    </li>
  );
}

export default Mypage;
