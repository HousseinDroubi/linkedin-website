const {Router} = require('express');
const { createJob } = require('../controllers/job.controller');
const router = Router();

router.post('/',createJob);

module.exports = router;