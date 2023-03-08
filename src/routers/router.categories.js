const express = require('express');
const { login } = require('../controllers/index');
const { verifyToken } = require('../auth/authoFunctions');
const { validName } = require('../middlewares/validLogin');

const router = express.Router();

router.post('/', validName, verifyToken, login.newCategory);
router.get('/', verifyToken, login.getCategory);

module.exports = router;