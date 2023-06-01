const mysql = require('mysql');
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
// const nodemailer = require('nodemailer');

//connects to MySQL database
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Anymean1$1',
    database: 'UserGrade'
});

//connects to MySQL database
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

//errors getting connection to establish using nodemailer

// const transporter = nodemailer.createTransport({
//     service: 'email-js',
//     auth: {
//       user: 'dummyaccount',
//       pass: 'Anymean1',
//     },
//   });

// app.post('/api/send-email', (req, res) => {
  //     const { assignment } = req.body;
  // });

    // const mailOptions = {
    //   from: 'dummy account',
    //   to: 'awes86@gmail.com',
    //   subject: 'Reminder: Submit Missing Work',
    //   text: `Dear Student, \n\nYou have an assignment (${assignment.work}) for the class (${assignment.category}) due on ${assignment.date} that has not been submitted yet. Please submit it as soon as possible.\n\nBest regards,\nYour School`,
    // };
  
     // errors; future fix
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error('Failed to send email:', error);
  //       res.status(500).json({ error: 'Failed to send email reminder.' });
  //     } else {
  //       console.log('Email sent:', info.response);
  //       res.status(200).json({ message: 'Email reminder sent successfully!' });
  //     }
  //   });
  // });

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