const {Router} = require('express');
const { getUser, getSomeUsers ,updateUser} = require('../controllers/user.controller');

const router = Router();

router.get('/:id',getUser);
router.get('/some/:id',getSomeUsers);
router.put('/',updateUser);
module.exports = router;