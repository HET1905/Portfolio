var path = require("path");
// var mysql = require('mysql');
var router = require('express').Router();
var connection = require('./connection.js');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/index.html'));
});

// router.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../public/notes.html'));
// });

// router.get('/api/contact',(req,res)=>{
//     connection.query('Select * from contact',(err,data)=>{
//         if(err){
//             throw err;
//         }
//         console.log(data)
//         res.send(data);
//     });
// })


// router.get('/api/notes', (req, res) => {
//     connection.query('SELECT * FROM notes', (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.send( result);
//     });
// });

router.post('/api/contact',(req,res)=>{
    connection.query(`INSERT INTO contact (client_Name, email,client_message ) values(?,?,?)`,
                    [req.body.client_name,req.body.email,req.body.client_message],
                    (err,result)=>{
        if(err){
            console.log(`Error in inserting data in table ${err}`);
        }
       
        console.log('Data saved....');
            // res.redirect('/');  
        
        
    });
    
});

// router.delete('/api/notes/:id', function(req, res) {
//     connection.query("DELETE FROM notes WHERE id = ?", [req.params.id], function(err, result) {
//       if (err) {
//         return res.status(500).end();
//       }
     
//       res.status(200).end();
  
//     });
//   });
  

module.exports = router;