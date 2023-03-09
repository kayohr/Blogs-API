const express = require('express');

const { verifyToken } = require('../auth/authoFunctions');
const { login } = require('../controllers/index');
// const { validPost } = require('../middlewares/validLogin');
const router = express.Router();

router.get('/', verifyToken, login.getPost);

module.exports = router;