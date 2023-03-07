const express = require('express');
const { login } = require('../controllers/index');

const router = express.Router();
const {
    validDisplayName,
    validEmail,
    validPassword,

} = require('../middlewares/validLogin');

router.post('/', validDisplayName,
validEmail,
validPassword, login.createUser);

module.exports = router;
