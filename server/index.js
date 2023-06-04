const mysql = require('mysql');
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require('nodemailer');

//connects to MySQL database
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Anymean1$1',
    database: 'UserGrade'
});

con.connect(function(err){
    if(err)
    {
        console.log(err)
    } else {
        console.log("connected")
    }
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));



var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 567,
    secure: false,
    auth: {
      user: 'aarongriffin.dev@gmail.com',
      pass: 'zhqk bhcq tnxw yhuf'
    }
  });
  
  var mailOptions = {
    from: 'aarongriffin.dev@gmail.com',
    to: 'dumacct128@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Works'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  // query to grab  all data within table

  app.get('/api/get', (req, res) => {
    const sqlSelect =
    "SELECT * FROM gradeDataFullupdated";
    con.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result)
    });
})

//start server
app.listen(3001, () =>{
    console.log('running port 3001')
})