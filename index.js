const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const PORT = process.env.port || 8008;
const cors = require("cors");
const iconv = require("iconv-lite");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*",
  Credential: true,
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: "project-db-stu.ddns.net",
  user: "jsGame",
  password: "123456",
  database: "jsGame",
  port: "3307",
}); 

app.post("/join", (req, res) => {
  console.log("/join", req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var tell = req.body.tell;
  var name = req.body.name;
  var nick = req.body.nick;
  var gender = req.body.gender;

  const sqlQuery =
    "insert into user(user_id, user_pass, user_nick, user_name, user_tell, user_sex) values (?,?,?,?,?,?);";
  db.query(sqlQuery, [id, pw, nick, name, tell, gender], (err, result) => {
    res.send(result);
  });
});

app.post("/idcheck", (req, res) => {
  console.log("/idcheck", req.body);
  var id = req.body.id;

  const sqlQuery = "select count(*) as 'cnt' from user where user_id=?;";
  db.query(sqlQuery, [id], (err, result) => {
    res.send(result);
  });
});

app.post("/nickcheck", (req, res) => {
  console.log("/nickcheck", req.body);
  var nick = req.body.nick;

  const sqlQuery = "select count(*) as 'cnt' from user where user_nick=?;";
  db.query(sqlQuery, [nick], (err, result) => {
    res.send(result);
  });
});

app.post("/tellcheck", (req, res) => {
  console.log("/tellcheck", req.body);
  var tell = req.body.tell;

  const sqlQuery = "select count(*) as 'cnt' from user where user_tell=?;";
  db.query(sqlQuery, [tell], (err, result) => {
    res.send(result);
  });
});

app.post("/login", (req, res) => {
  console.log("/login", req.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery =
    "select admin from user where user_id=? and user_pass=?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    console.log("관리자 여부 => " + result);
    res.send(result);
  });
});

app.post("/userdelete", (req, res) => {
  console.log("/userdelete", req.body);
  var id = req.body.id;

  const sqlQuery = "delete from user where user_id=?;";
  db.query(sqlQuery, [id], (err, result) => {
    res.send(result);
  });
});

app.post("/findID", (req, res) => {
  console.log("/findID", req.body);
  var name = req.body.name;
  var tell = req.body.tell;

  const sqlQuery =
    "select user_id from user where user_name=? and user_tell=?;";
  db.query(sqlQuery, [name, tell], (err, result) => {
    res.send(result);
  });
});

app.post("/findPW", (req, res) => {
  console.log("/findPW", req.body);
  var id = req.body.id;
  var name = req.body.name;
  var tell = req.body.tell;

  const sqlQuery =
    "select user_pass from user where user_id=? and user_name=? and user_tell=?;";
  db.query(sqlQuery, [id, name, tell], (err, result) => {
    res.send(result);
  });
});

//사용자 비밀번호 일치 여부
app.post("/pwcheck", (req, res) => {
  console.log("/pwcheck", req.body);
  var user_id = req.body.user_id;

  const sqlQuery = "select user_pass from user where user_id=?;";
  db.query(sqlQuery, [user_id], (err, result) => {
    res.send(result);
  });
});

app.post("/getstory", (req, res) => {
  console.log("/getstory", req.body);
  var scenario_num = req.body.scenario_num;
  var chapter_num = req.body.chapter_num;
  var scene_num = req.body.scene_num;

  const sqlQuery =
    "select speak_num, speak_story from scenario where scenario_num=? and chapter_num=? and scene_num=?;";
  db.query(sqlQuery, [scenario_num, chapter_num, scene_num], (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/scecall", (req, res) => {
  console.log("/scecall", req.body);
  var scenario_num = req.body.scenario_num;
  var chapter_num = req.body.chapter_num;
  var scene_num = req.body.scene_num;
  var speak_num = req.body.speak_num;

  const sqlQuery =
    "select speak_story from scenario where scenario_num=? and chapter_num=? and scene_num=? and speak_num=?;";
  db.query(
    sqlQuery,
    [scenario_num, chapter_num, scene_num, speak_num],
    (err, result) => {
      console.log(result);
      res.send(result);
    }
  );
});

app.post("/sceupdate", (req, res) => {
  console.log("/sceupdate", req.body);
  var scenario_num = req.body.scenario_num;
  var chapter_num = req.body.chapter_num;
  var scene_num = req.body.scene_num;
  var speak_num = req.body.speak_num;
  var speak_story = req.body.speak_story;

  const sqlQuery =
    "update scenario set speak_story=? where scenario_num=? and chapter_num=? and scene_num=? and speak_num=?;";
  db.query(
    sqlQuery,
    [speak_story, scenario_num, chapter_num, scene_num, speak_num],
    (err, result) => {
      console.log(result);
      res.send(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
