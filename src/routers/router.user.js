const express = require('express');
const { login } = require('../controllers/index');
const { verifyToken } = require('../auth/authoFunctions');

const router = express.Router();
const {
    validDisplayName,
    validEmail,
    validPassword,

} = require('../middlewares/validLogin');

router.post('/', validDisplayName,
validEmail,
validPassword, login.createUser);

router.get('/', verifyToken, login.getAll);
router.get('/:id', verifyToken, login.getById);

module.exports = router;
