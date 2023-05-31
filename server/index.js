const mysql = require('mysql');
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

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

// CORS!!!! Without this, my app was not able to properly communicate with database
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));


// grabs all data from database and makes it available for use on frontend;
app.get('/api/get', (req, res) => {
    const sqlSelect =
    "SELECT * FROM gradeTable";
    con.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result)
    });
})

// adds user input and updates database
// app.post("/api/insert", (req, res) => {
//     const reviewTitle = req.body.reviewTitle
//     const review = req.body.review
//     const sqlInsert = "INSERT INTO reviews (reviewTitle, review) VALUES (?,?)"
//     con.query(sqlInsert, [reviewTitle, review], (err, result) =>{
//         console.log(result)
//     })
// });

// deletes data from from database; takes effect on refresh
// app.delete("/api/delete/:reviewTitle", (req, res) => {
//     const title = req.params.reviewTitle
//     const sqlDelete = 
//     "DELETE from reviews WHERE reviewTitle = ?"
//    con.query(sqlDelete, title, (err, result) => {
//     if(err) console.log(err);
//    })
// });

//updates data from database; takes effect on refresh
// app.put("/api/update", (req, res) => {
//     const name = req.body.reviewTitle;
//     const summary = req.body.review;
//     const sqlUpdate = "UPDATE reviews SET review = ? WHERE reviewTitle = ?"

//     con.query(sqlUpdate, [summary, name], (err, result) => {
//         if (err) console.log(err);
//     })
// })

app.listen(3001, () =>{
    console.log('running port 3001')
})