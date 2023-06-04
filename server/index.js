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
        console.log("WE GOT A CONNECTION!! EMAIL REMINDER WORKING!")
    }
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

//nodemailer verification; had to create special password for gmail to work correctly
var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 567,
    secure: false,
    auth: {
      user: 'aarongriffin.dev@gmail.com',
      pass: 'zhqk bhcq tnxw yhuf'
    }
});
  
//express defining route for http post request
app.post('/api/send-email', (req, res) => {
//    extract assignment from req.body object
    const { assignment } = req.body;
  
    const mailOptions = {
      from: 'aarongriffin.dev@gmail.com',
      to: 'dumacct128@gmail.com',
      subject: 'PowerGrade: Reminder',
      text: `Dear Student, \n\nYou have an missing assignment (${assignment.work}) for the class (${assignment.className}) that was due on ${assignment.date}. 
      This is a reminder for you to submit your missing work. Please email your teacher when you have completed the task.
      \n\nBest regards,\nPowerGrade`,
    };
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to send email reminder.' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email reminder sent successfully!' });
      }
    });
  });


  // SELECT query to grab  all data within table

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