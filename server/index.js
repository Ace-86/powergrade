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

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

// grabs all data from database;
app.get('/api/get', (req, res) => {
    const sqlSelect =
    "SELECT * FROM gradeDataFull";
    con.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result)
    });
})

app.listen(3001, () =>{
    console.log('running port 3001')
})