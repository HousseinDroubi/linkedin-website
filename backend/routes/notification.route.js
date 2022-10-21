const {Router} = require('express');
const { getSomeJobs} = require('../controllers/notification.controller');

const router = Router();

router.get('/:user_id',getSomeJobs);

module.exports = router;