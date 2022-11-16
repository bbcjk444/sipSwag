const express = require("express");
const app = express();
const mysql = require("mysql");
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
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
  console.log("aaaa");
  console.log("bbb");
  console.log(apple);
});
