

const mysql = require('mysql');

const db = require('./myconfig.js');
db.query("CREATE DATABASE userschema", function(err,res){
    if(err) throw err;
    console.log("Schema/Database File Created");
    db.query("CREATE TABLE userschema.schedules (id INT NOT NULL AUTO_INCREMENT,username varchar(255) NOT NULL,daysoftheweek ENUM('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday') NOT NULL,starttime TIME,endtime TIME, PRIMARY KEY (`id`))", function(err,res){
        if(err) throw err;
        console.log("Table Created");
    });
});






                /* var sql = "INSERT INTO userschema.schedules (username, daysoftheweek, starttime, endtime) VALUES ?";
                var values = [

                    ['shanthi', 'Monday', '08:30', '05:30'],
                    ['Ananya', 'Tuesday', '08:30', '05:30'],
                    ['Sanjana','Wednesday', '08:30', '05:30'],
                    ['Prakash','Thursday', '08:30', '05:30'],
                    ['Raje' ,'Friday', '08:30', '05:30'],
                    ['Rajaram' ,'Saturday', '08:30', '05:30'],
                    ['Prema' ,'Sunday', '08:30', '05:30']
                ];
                connection.query(sql, [values],  function(err, result) {
                    if(err) throw err;
                    console.log("No of Rows inserted into table successfully is : " +result.affectedRows);
                }); */
            



