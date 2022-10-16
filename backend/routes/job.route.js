const {Router} = require('express');
const { createJob,getAllJobs,getSearchJobs,getMyJobs} = require('../controllers/job.controller');
const router = Router();

router.post('/',createJob);
router.get('/',getAllJobs);
router.get('/:title',getSearchJobs);
router.get('/my/:company_id',getMyJobs);
module.exports = router;