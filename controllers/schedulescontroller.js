const schedulesmodel= require('../model/schedulesmodel');
const schedulescontroller={
    /* Display list of schedules. */
    listAllSchedules:(req,res) =>{
       // db.query("SELECT * FROM schedules", function(err,result){
        schedulesmodel.retrieveData((result)=>{
            res.render('index', {
                title:'Schedule Management of Users',
                result, 
                schedulesLength: result.length > 0
            });
        });
    },
    
    /*Display the form to create schedules.**/
    createNewSchedule : (req,res)=>{
        res.render('form', {
            title:'Create New Schedule'
        });
    },
    
    /*To submit the form values and create a new entry in the databse.*/
    submitNewSchedule :(req,res)=>{
        /*Validate the differnce in time values of the form is greater than 5 hours.*/
        schedulesmodel.validateTime([req.body.starttime,req.body.endtime],(result)=>{
           // console.log("Object values are:"+Object.values(result[0]));
            if(result>='05:00:00'){
               console.log("Values are "+req.body.username+req.body.dayoftheweek+req.body.starttime+req.body.endtime)
                schedulesmodel.insertData([req.body.username, req.body.dayoftheweek, req.body.starttime, req.body.endtime],(result)=> {
                console.log("After inserting no of Rows inserted into table successfully is : " +result.affectedRows);
                    res.redirect('/');
                    
                });
            }else{
                console.log("LEsser than 5 hours");
                res.render('form',
                {title:'Create New Schedule',msg:'Please specify valid shift timings OF 5 hrs.'});
            }      
            
        });
    }
};
module.exports=schedulescontroller;