const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.listen(3001, () => {
    console.log("yey");

}
);

const sqlite3 = require("sqlite3").verbose();
// let sql;

const db = new sqlite3.Database("./spotify.db", sqlite3.OPEN_READWRITE, (err) =>{
    if(err) return console.log(err.message);
    else return console.log("connected")
});

app.post("/addArtist", (req,res) =>{
    const name = req.body.name;
    const dob = req.body.dob;
    const bio = req.body.bio;
    
    db.run(
        "INSERT INTO Artist (id,Name,DOB,Bio) VALUES (?,?,?,?)",
        ("",name,dob,bio),
        (err,result) =>{
            if(err) {
                console.log(err)
            }else{
                res.send("values inserted")
            }
        }
    );


});