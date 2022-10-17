const {Router} = require('express');
const { getApplicantStatus, apply,reject,accept } = require('../controllers/applicant.controller');

const router = Router();

router.get('/:job_id/:user_id',getApplicantStatus);
router.post('/apply',apply);
router.put('/reject',reject);
router.put('/accept',accept);


module.exports = router;
