const express = require('express');
const router = express.Router();
const controllers= require('../controllers/schedulescontroller');
/* Display list of schedules. */
router.get('/',controllers.listAllSchedules);

/*Display the form to create schedules.**/
router.get('/new',controllers.createNewSchedule); 


/*To submit the form values and create a new entry in the databse.*/
router.post('/new',controllers.submitNewSchedule);    

module.exports = router;
