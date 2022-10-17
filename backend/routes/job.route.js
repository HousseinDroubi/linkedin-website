const {Router} = require('express');
const { createJob,getAllJobs,getSearchJobs,getMyJobs,getJob} = require('../controllers/job.controller');
const router = Router();

router.post('/',createJob);
router.get('/',getAllJobs);
router.get('/:title',getSearchJobs);
router.get('/my/:company_id',getMyJobs);
router.get('/one/:id',getJob)
module.exports = router;