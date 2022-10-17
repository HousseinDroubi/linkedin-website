const {Router} = require('express');
const { follow, unfollow } = require('../controllers/follow.controller');

const router = Router();

router.post('/follow',follow);
router.post('/unfollow',unfollow);

module.exports = router;
