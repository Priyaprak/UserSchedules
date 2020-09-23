const schedulesmodel= require('../model/schedulesmodel');
const schedulescontroller={
    /* Display list of schedules. */
    listAllSchedules:(req,res) =>{
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
            if(result>='05:00:00'){
                schedulesmodel.insertData([req.body.username, req.body.dayoftheweek, req.body.starttime, req.body.endtime],(result)=> {
                    res.redirect('/');
                });
            }else{
                 res.render('form',
                {   title:'Create New Schedule',
                    msg:'Please specify valid shift timings OF 5 hrs.'
                });
            }      
        });
    }
};
module.exports=schedulescontroller;
