const {Router} = require('express');
const { getUser, getSomeUsers } = require('../controllers/user.controller');

const router = Router();

router.get('/:id',getUser);
router.get('/some/:id',getSomeUsers);

module.exports = router;