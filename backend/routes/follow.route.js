const {Router} = require('express');
const { follow, unfollow,getFollowingStatus } = require('../controllers/follow.controller');

const router = Router();

router.post('/follow',follow);
router.post('/unfollow',unfollow);
router.get('/:user_id/:company_id',getFollowingStatus);
module.exports = router;
