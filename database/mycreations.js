

const mysql = require('mysql');

const db = require('./myconfig.js');
db.query("CREATE DATABASE userschema", function(err,res){
    if(err) throw err;
    db.query("CREATE TABLE userschema.schedules (id INT NOT NULL AUTO_INCREMENT,username varchar(255) NOT NULL,daysoftheweek ENUM('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday') NOT NULL,starttime TIME,endtime TIME, PRIMARY KEY (`id`))", function(err,res){
        if(err) throw err;
    });
});



