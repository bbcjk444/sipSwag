const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.port || 8008;
const cors = require('cors');
const iconv = require('iconv-lite');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: '*',
  Credential: true
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'secondproject'
});

const multer = require('multer');
const path = require('path');
const fs = require('fs');

try {
  fs.readdirSync('userimgFolder');
} catch (error) {
  console.error('userimgFolder 폴더가 없어 userimgFolder 폴더를 생성합니다.');
  fs.mkdirSync('userimgFolder');
}

const userimg_upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'userimgFolder/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(
        null,
        path.basename(iconv.decode(file.originalname, 'utf-8').toString(), ext) + Date.now() + ext
      );
    }
  }),
  limits: { fileSize: 10 * 1024 * 1024 }
});

// 이미지가 저장된 경로를 static으로 지정하면 불러올 수 있다.
app.use('/userimgFolder', express.static('userimgFolder'));

app.post('/join', (req, res) => {
  console.log('/join', req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var tell = req.body.tell
  var name = req.body.name;
  var nick = req.body.nick;
  var gender = req.body.gender;

  const sqlQuery =
    'insert into user2(user_id, user_pass, user_nick, user_name, user_tell, user_sex) values (?,?,?,?,?,?);';
  db.query(sqlQuery, [id, pw, nick, name, tell, gender], (err, result) => {
    res.send(result);
  });
});

app.post('/idcheck', (req, res) => {
  console.log('/idcheck', req.body);
  var id = req.body.id;

  const sqlQuery = "select count(*) as 'cnt' from user2 where user_id=?;";
  db.query(sqlQuery, [id], (err, result) => {
    res.send(result);
  });
});

app.post('/nickcheck', (req, res) => {
  console.log('/nickcheck', req.body);
  var nick = req.body.nick;

  const sqlQuery = "select count(*) as 'cnt' from user2 where user_nick=?;";
  db.query(sqlQuery, [nick], (err, result) => {
    res.send(result);
  });
});

app.post('/tellcheck', (req, res) => {
  console.log('/tellcheck', req.body);
  var tell = req.body.tell;

  const sqlQuery = "select count(*) as 'cnt' from user2 where user_tell=?;";
  db.query(sqlQuery, [tell], (err, result) => {
    res.send(result);
  });
});

app.post('/login', (req, res) => {
  console.log('/login', req.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery = "select user_name from user2 where user_id=? and user_pass=?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    console.log('이름 확인 => ' + result);
    res.send(result);
  });
});

app.post('/userdelete', (req, res) => {
  console.log('/userdelete', req.body);
  var id = req.body.id;

  const sqlQuery = "delete from user2 where user_id=?;";
  db.query(sqlQuery, [id], (err, result) => {
    res.send(result);
  });
});

app.post('/findID', (req, res) => {
  console.log('/findID', req.body);
  var name = req.body.name;
  var tell = req.body.tell;

  const sqlQuery = "select user_id from user2 where user_name=? and user_tell=?;";
  db.query(sqlQuery, [name, tell], (err, result) => {
    res.send(result);
  })
})

app.post('/findPW', (req, res) => {
  console.log('/findPW', req.body);
  var id = req.body.id;
  var name = req.body.name;
  var tell = req.body.tell;

  const sqlQuery = "select user_pass from user2 where user_id=? and user_name=? and user_tell=?;";
  db.query(sqlQuery, [id, name, tell], (err, result) => {
    res.send(result);
  })
})

//사용자 비밀번호 일치 여부
app.post('/pwcheck', (req, res) => {
  console.log('/pwcheck', req.body);
  var user_id = req.body.user_id;

  const sqlQuery = 'select user_pass from user2 where user_id=?;';
  db.query(sqlQuery, [user_id], (err, result) => {
    res.send(result);
  });
});

//사용자 정보 수정
app.post('/updateuser', userimg_upload.single('image'), (req, res) => {
  // console.log('/updateuser', req.file, req.body);
  var user_id = '';
  var user_name = '';
  var user_nick = '';
  var user_tell = '';
  var user_profile = '';

  if(req.file === undefined){
    user_id = req.body.user_id;
    user_name = req.body.user_name;
    user_nick = req.body.user_nick;
    user_tell = req.body.user_tell;
    user_profile = req.body.image;
  }
  if(req.file !== undefined){
    user_id = req.body.user_id;
    user_name = req.body.user_name;
    user_nick = req.body.user_nick;
    user_tell = req.body.user_tell;
    user_profile = req.file.filename;
  }

  const sqlQuery =
    'update user2 set user_name=?, user_nick=?, user_tell=?, user_profile=? where user_id=?;';
  db.query(
    sqlQuery,
    [user_name, user_nick, user_tell, user_profile, user_id],
    (err, result) => {
      res.send(result);
      console.log('result=', result);
    }
  );
});

//사용자비밀번호 수정
app.post('/passwordupdate', (req, res) => {
  console.log('/passwordupdate', req.body);
  var user_id = req.body.user_id;
  var user_pw = req.body.user_pw;

  const sqlQuery = 'update user2 set user_pass=? where user_id=?;';
  db.query(sqlQuery, [user_pw, user_id], (err, result) => {
    res.send(result);
    console.log('result=', result);
  });
});

//로그인한 사용자 정보 가져오기
app.post('/user_login', (req, res) => {
  console.log('/user_login', req.body);
  var user_id = req.body.user_id;

  const sqlQuery =
    'select user_name, user_nick, user_tell, user_profile from user2 where user_id=?;';
  db.query(sqlQuery, [user_id], (err, result) => {
    res.send(result);
  });
});

app.post('/getstory', (req, res) => {
  console.log('/getstory', req.body);
  var scenario_num = req.body.scenario_num;
  var chapter_num = req.body.chapter_num;
  var scene_num = req.body.scene_num;

  const sqlQuery =
    'select speak_num, speak_story from scenario where scenario_num=? and chapter_num=? and scene_num=?;';
  db.query(sqlQuery, [scenario_num, chapter_num, scene_num], (err, result) => {
    console.log(result);
    res.send(result);
  });
})

app.post('/scecall', (req, res) => {
  console.log('/scecall', req.body);
  var scenario_num = req.body.scenario_num;
  var chapter_num = req.body.chapter_num;
  var scene_num = req.body.scene_num;
  var speak_num = req.body.speak_num

  const sqlQuery =
    'select speak_story from scenario where scenario_num=? and chapter_num=? and scene_num=? and speak_num=?;';
  db.query(sqlQuery, [scenario_num, chapter_num, scene_num, speak_num], (err, result) => {
    console.log(result);
    res.send(result);
  });
})

app.post('/sceupdate', (req, res) => {
  console.log('/sceupdate', req.body);
  var scenario_num = req.body.scenario_num;
  var chapter_num = req.body.chapter_num;
  var scene_num = req.body.scene_num;
  var speak_num = req.body.speak_num;
  var speak_story = req.body.speak_story;

  const sqlQuery =
    'update scenario set speak_story=? where scenario_num=? and chapter_num=? and scene_num=? and speak_num=?;';
  db.query(sqlQuery, [speak_story, scenario_num, chapter_num, scene_num, speak_num], (err, result) => {
    console.log(result);
    res.send(result);
  });
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
  });