const express = require('express');
const { login } = require('../controllers/index');
const { validLogin } = require('../middlewares/validLogin');

const router = express.Router();

router.post('/', validLogin, login.login);

module.exports = router;