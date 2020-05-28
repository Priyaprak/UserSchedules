const db = require('../database/myconfig');
const schedulesmodel={
    /* Display list of schedules. */
    retrieveData: (allSchedules)=>{
        db.query("SELECT * FROM schedules", (err,results)=>{
            if(err) throw err;
            allSchedules(results);
        });
    },
    /* Insert schedules data to the table. */
    insertData : ([username, dayoftheweek, starttime, endtime],res)=>{
        let sql = "INSERT INTO userschema.schedules(username, daysoftheweek, starttime, endtime) VALUES (?) ";
        let values = [username,dayoftheweek, starttime, endtime];
       // console.log(req.body.username+req.body.dayoftheweek+req.body.starttime+req.body.endtime)
       // let values = [req.body.username, req.body.dayoftheweek, req.body.starttime, req.body.endtime];
        db.query(sql, [values],(err,result)=>{
            if(err) throw err;
            console.log("No of Rows inserted into table successfully is : " +result.affectedRows);
            res(result);
        });
    },

    validateTime: ([arg1,arg2],res)=>{
        console.log("Time values are:"+arg1+arg2);
        let sql = `SELECT TIMEDIFF("${arg2}","${arg1}")`;
        db.query(sql,(err,results)=>{
            if (err) throw err;
            console.log(Object.values(results[0]));
            res(Object.values(results[0])) ;
        });
    }
};
module.exports=schedulesmodel;